import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderPageComponent } from './food-order-page.component';

describe('FoodOrderPageComponent', () => {
  let component: FoodOrderPageComponent;
  let fixture: ComponentFixture<FoodOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
