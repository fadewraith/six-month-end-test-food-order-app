import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FoodItems } from '../models/food-list';
import { ApiService } from '../services/services/api.service';

@Component({
  selector: 'app-food-order-list',
  templateUrl: './food-order-list.component.html',
  styleUrls: ['./food-order-list.component.css'],
})
export class FoodOrderListComponent implements OnInit {

  @Input() foodItem: any;

  foodOrdered: FoodItems[] = [];
  

  isAdded: boolean = true;

  constructor() {}

  ngOnInit(): void {
    // this.getFoodItems();
    //  setTimeout(() => {
    //   console.log(this.foodItem,'foodItem');
    //  }, 5000);
  }
  addFood(index: any, food: any) {
    // this.add_food.emit(index);
    console.warn(food);
    this.foodOrdered.push(food);
  }

  removeFood(index: any, food: any) {
    // this.remove_food.emit(index);
    if(this.foodOrdered.length == 0) {
      return;
    } else {
      this.foodOrdered = this.foodOrdered.filter((value, i) => {
        console.warn(value.id);
        return value.id !== (index+1);
      })
    }
  }


  
}
