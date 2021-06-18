import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailedListItemComponent } from './course-detailed-list-item.component';

describe('CourseDetailedListItemComponent', () => {
  let component: CourseDetailedListItemComponent;
  let fixture: ComponentFixture<CourseDetailedListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailedListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
