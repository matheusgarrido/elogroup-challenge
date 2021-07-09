import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLeadFormComponent } from './new-lead-form.component';

describe('NewLeadFormComponent', () => {
  let component: NewLeadFormComponent;
  let fixture: ComponentFixture<NewLeadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLeadFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLeadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
