import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CreatorsApiService } from './creators-api.service';

describe('CreatorsApiService', () => {
  let service: CreatorsApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreatorsApiService],
    });
    service = TestBed.inject(CreatorsApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data', () => {
    const mockData = {
      Creators: [
        { id: '1', email: 'user1@example.com' },
        { id: '2', email: 'user2@example.com' },
      ],
      Products: [
        {
          id: '1',
          creatorId: '1',
          createTime: '2022-10-16T14:39:24.348935+02:00',
        },
        {
          id: '2',
          creatorId: '1',
          createTime: '2022-10-17T15:45:32.348935+02:00',
        },
      ],
    };

    service.getData().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne(service['dataUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
