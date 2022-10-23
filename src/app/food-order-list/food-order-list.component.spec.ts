import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderListComponent } from './food-order-list.component';

describe('FoodOrderListComponent', () => {
  let component: FoodOrderListComponent;
  let fixture: ComponentFixture<FoodOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
