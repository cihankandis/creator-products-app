import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatorListComponent } from './creator-list.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { By } from '@angular/platform-browser';
import { TopCreator } from '../../models/top-creator.model';
import { DatePipe } from '@angular/common';

describe('CreatorListComponent', () => {
  let component: CreatorListComponent;
  let fixture: ComponentFixture<CreatorListComponent>;
  let datePipe: DatePipe;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CreatorListComponent],
      imports: [MatListModule, MatDividerModule],
      providers: [DatePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorListComponent);
    component = fixture.componentInstance;
    datePipe = TestBed.inject(DatePipe);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display top creators', () => {
    const topCreators = [
      {
        user: { email: 'creator1@example.com' },
        productCount: 5,
        mostRecentProduct: { createTime: '2023-10-25T12:34:56.789Z' },
      },
      {
        user: { email: 'creator2@example.com' },
        productCount: 3,
        mostRecentProduct: { createTime: '2023-10-25T10:11:22.333Z' },
      },
    ];

    component.topCreators = topCreators as TopCreator[];
    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(By.css('mat-list-item'));

    expect(listItems.length).toBe(topCreators.length);

    const firstListItem = listItems[0].nativeElement;
    expect(firstListItem.textContent).toContain(
      'Creator: creator1@example.com'
    );
    expect(firstListItem.textContent).toContain('Product count: 5');
    expect(firstListItem.textContent).toContain(
      datePipe.transform(topCreators[0].mostRecentProduct.createTime, 'medium')
    );
  });
});
