import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCreatorsComponent } from './top-creators.component';

describe('TopCreatorsComponent', () => {
  let component: TopCreatorsComponent;
  let fixture: ComponentFixture<TopCreatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopCreatorsComponent]
    });
    fixture = TestBed.createComponent(TopCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
