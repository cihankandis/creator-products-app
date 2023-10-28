import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  compareCreators,
  getMostRecentProduct,
  getProductCount,
} from '../utils/data-utils';
import { TopCreator } from '../models/top-creator.model';
import { CreatorsApiService } from './creators-api.service';

@Injectable()
export class CreatorsDataService {
  constructor(private creatorsApiService: CreatorsApiService) {}

  /**
   * Returns the top N active creators from the API endpoint.
   * @param numberOfCreators - The number of top active creators to be fetched.
   * @returns An Observable containing data of the top N active creators.
   */
  getTopNActiveCreators(numberOfCreators: number): Observable<TopCreator[]> {
    return this.creatorsApiService.getData().pipe(
      map((data) => {
        // Process the data to get creator statistics
        const creatorsWithStats = data.Creators.map((creator) => {
          const productCount = getProductCount(data.Products, creator.id);
          const mostRecentProduct = getMostRecentProduct(
            data.Products,
            creator.id
          );
          return { user: creator, productCount, mostRecentProduct };
        });

        creatorsWithStats.sort(compareCreators);

        return creatorsWithStats.slice(0, numberOfCreators);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    return throwError(() => err);
  }
}
