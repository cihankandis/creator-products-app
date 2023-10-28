import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorListComponent } from './creator-list.component';

describe('CreatorListComponent', () => {
  let component: CreatorListComponent;
  let fixture: ComponentFixture<CreatorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatorListComponent]
    });
    fixture = TestBed.createComponent(CreatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
