import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class CreatorsApiService {
  private dataUrl = environment.dataUrl;

  constructor(private http: HttpClient) {}

  /**
   * Fetches data containing user and product details from the API endpoint
   * @returns An Observable containing user and product data
   */
  getData(): Observable<{ Creators: User[]; Products: Product[] }> {
    return this.http
      .get<{ Creators: User[]; Products: Product[] }>(this.dataUrl)
      .pipe(catchError(this.handleError));
  }

  // Handles HTTP errors that may occur during the API call
  private handleError(err: HttpErrorResponse): Observable<never> {
    return throwError(() => err);
  }
}
