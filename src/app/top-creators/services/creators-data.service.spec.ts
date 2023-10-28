import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreatorsDataService } from './creators-data.service';
import { CreatorsApiService } from './creators-api.service';
import { of } from 'rxjs';

describe('CreatorsDataService', () => {
  let creatorsDataService: CreatorsDataService;
  let creatorsApiService: jasmine.SpyObj<CreatorsApiService>;

  beforeEach(() => {
    const creatorsApiServiceSpy = jasmine.createSpyObj('CreatorsApiService', [
      'getData',
    ]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CreatorsDataService,
        { provide: CreatorsApiService, useValue: creatorsApiServiceSpy },
      ],
    });
    creatorsDataService = TestBed.inject(CreatorsDataService);
    creatorsApiService = TestBed.inject(
      CreatorsApiService
    ) as jasmine.SpyObj<CreatorsApiService>;
  });

  it('should be created', () => {
    expect(creatorsDataService).toBeTruthy();
  });

  it('should get top N active creators', () => {
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
        {
          id: '3',
          creatorId: '2',
          createTime: '2022-10-18T16:50:12.348935+02:00',
        },
      ],
    };

    creatorsApiService.getData.and.returnValue(of(mockData));

    const topN = 2;

    creatorsDataService.getTopNActiveCreators(topN).subscribe((creators) => {
      const expectedCreators = [
        {
          user: { id: '1', email: 'user1@example.com' },
          productCount: 2,
          mostRecentProduct: {
            id: '2',
            creatorId: '1',
            createTime: '2022-10-17T15:45:32.348935+02:00',
          },
        },
        {
          user: { id: '2', email: 'user2@example.com' },
          productCount: 1,
          mostRecentProduct: {
            id: '3',
            creatorId: '2',
            createTime: '2022-10-18T16:50:12.348935+02:00',
          },
        },
      ];
      expect(creators).toEqual(expectedCreators);
    });
  });
});
