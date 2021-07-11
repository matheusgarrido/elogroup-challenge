import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLeadComponent } from './card-lead.component';

describe('CardLeadComponent', () => {
  let component: CardLeadComponent;
  let fixture: ComponentFixture<CardLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
