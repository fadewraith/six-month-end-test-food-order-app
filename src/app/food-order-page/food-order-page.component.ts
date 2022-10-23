import { Component, OnInit } from '@angular/core';
import { FoodItems } from '../models/food-list';
import { ApiService } from '../services/services/api.service';

@Component({
  selector: 'app-food-order-page',
  templateUrl: './food-order-page.component.html',
  styleUrls: ['./food-order-page.component.css'],
})
export class FoodOrderPageComponent implements OnInit {
  foodsToDisplay: FoodItems[] = [];

  foodList: FoodItems[] = [
    {
      id: '',
      foodName: 'pizza',
      price: 200,
    },
    {
      id: '',
      foodName: 'burger',
      price: 300,
    },
    {
      id: '',
      foodName: 'dosa',
      price: 400,
    },
    {
      id: '',
      foodName: 'idli',
      price: 500,
    },
    {
      id: '',
      foodName: 'sambhar',
      price: 600,
    },
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getFoodItems();
  }

  foodItems() {
    for (let i = 0; i < this.foodList.length; i++) {
      this.apiService.postService(this.foodList[i]).subscribe((res: any) => {
        this.foodsToDisplay.push(this.foodList[i]);
      });
    }
  }

  getFoodItems() {
    this.apiService.getService().subscribe((res: any) => {
      // console.warn(res);
      this.foodsToDisplay = res;
    });
  }

  addItem(index: any) {
    console.warn(index);
  }
}
