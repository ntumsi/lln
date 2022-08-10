import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CurriculumVComponent } from './curriculum-v.component';

describe('CurriculumVComponent', () => {
  let component: CurriculumVComponent;
  let fixture: ComponentFixture<CurriculumVComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
