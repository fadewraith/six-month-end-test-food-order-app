import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodItems } from 'src/app/models/food-list';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { } 

  baseUrl = 'http://localhost:3000/posts';

  getService() {
    return this._http.get<FoodItems[]>(this.baseUrl);
  }

  postService(food: FoodItems) {
    return this._http.post<FoodItems>(this.baseUrl, food);
  }

  deleteService(id: string) {
    this._http.delete(this.baseUrl + '/' + id);
  }



}
