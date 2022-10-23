import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodOrderListComponent } from './food-order-list/food-order-list.component';
import { FoodOrderPageComponent } from './food-order-page/food-order-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full',
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'sign-up', component: SignupComponent
  },
  {
    path: 'food-order', component: FoodOrderPageComponent, canActivate: [AuthGuard]
  },
  {
    path: 'food-list', component: FoodOrderListComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
