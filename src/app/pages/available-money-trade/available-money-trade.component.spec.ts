import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableMoneyTradeComponent } from './available-money-trade.component';

describe('AvailableMoneyTradeComponent', () => {
  let component: AvailableMoneyTradeComponent;
  let fixture: ComponentFixture<AvailableMoneyTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableMoneyTradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableMoneyTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
