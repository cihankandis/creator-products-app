import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopCreatorsComponent } from './top-creators.component';
import { MatCardModule } from '@angular/material/card';
import { of } from 'rxjs';
import { TopCreator } from '../../models/top-creator.model';
import { By } from '@angular/platform-browser';
import { CreatorListComponent } from '../creator-list/creator-list.component';
import { MatListModule } from '@angular/material/list';
import { CreatorsDataService } from '../../services/creators-data.service';

describe('TopCreatorsComponent', () => {
  let component: TopCreatorsComponent;
  let fixture: ComponentFixture<TopCreatorsComponent>;
  let mockCreatorsDataService: jasmine.SpyObj<CreatorsDataService>;

  beforeEach(() => {
    mockCreatorsDataService = jasmine.createSpyObj('CreatorsDataService', [
      'getTopNActiveCreators',
    ]);

    TestBed.configureTestingModule({
      declarations: [TopCreatorsComponent, CreatorListComponent],
      imports: [MatCardModule, MatListModule],
      providers: [
        { provide: CreatorsDataService, useValue: mockCreatorsDataService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCreatorsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load top creators from the data service', () => {
    const topCreators: TopCreator[] = [
      {
        user: { id: 'usr_1', email: 'creator1@example.com' },
        productCount: 5,
        mostRecentProduct: {
          id: 'prod_1',
          creatorId: 'usr_1',
          createTime: '2022-10-16T14:39:24.348935+02:00',
        },
      },
      {
        user: { id: 'usr_2', email: 'creator2@example.com' },
        productCount: 3,
        mostRecentProduct: {
          id: 'prod_2',
          creatorId: 'usr_2',
          createTime: '2022-10-17T15:45:32.348935+02:00',
        },
      },
    ];

    mockCreatorsDataService.getTopNActiveCreators.and.returnValue(
      of(topCreators)
    );

    fixture.detectChanges();

    expect(component.topCreators$).toBeDefined();
  });

  it('should render the CreatorListComponent with the correct input data', () => {
    const topCreators: TopCreator[] = [
      {
        user: { id: 'usr_1', email: 'creator1@example.com' },
        productCount: 5,
        mostRecentProduct: {
          id: 'prod_1',
          creatorId: 'usr_1',
          createTime: '2022-10-16T14:39:24.348935+02:00',
        },
      },
      {
        user: { id: 'usr_2', email: 'creator2@example.com' },
        productCount: 3,
        mostRecentProduct: {
          id: 'prod_2',
          creatorId: 'usr_2',
          createTime: '2022-10-17T15:45:32.348935+02:00',
        },
      },
    ];

    mockCreatorsDataService.getTopNActiveCreators.and.returnValue(
      of(topCreators)
    );

    fixture.detectChanges();

    const creatorListComponent = fixture.debugElement.query(
      By.directive(CreatorListComponent)
    );
    expect(creatorListComponent).toBeDefined();
  });
});
