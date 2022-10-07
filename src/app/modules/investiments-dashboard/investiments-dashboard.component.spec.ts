import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentsDashboardComponent } from './investiments-dashboard.component';

describe('InvestimentsDashboardComponent', () => {
  let component: InvestimentsDashboardComponent;
  let fixture: ComponentFixture<InvestimentsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestimentsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
