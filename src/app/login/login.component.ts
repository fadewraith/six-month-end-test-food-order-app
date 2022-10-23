import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpUser } from '../models/signup';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getAllUsers: SignUpUser[] = [];

  login!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    // this.allUsers();
    this.login = this._fb.group({
      'email': this._fb.control('', [Validators.required, Validators.email]),
      'password': this._fb.control('', [Validators.required])
    })
  }

  // allUsers() {
  //   const userStored = localStorage.getItem('users');
  //   if(userStored !== null) {
  //     this.getAllUsers = JSON.parse(userStored) ;
  //   }
  //   for(let i = 0;i < this.getAllUsers.length;i++) {
  //     console.warn(`${i+1} is user ${this.getAllUsers[i].email}`);
  //   }
  // }

  signIn(data: any) {
    // console.warn(data.email, data.password);
    const userStored = localStorage.getItem('users');
    let count = 0;
    if(userStored !== null) {
      this.getAllUsers = JSON.parse(userStored) ;
    }
    this.getAllUsers.forEach((value: any, index: any) => {
      if(value.email === data.email) {
        // console.warn('ghkhkjh', data.email);
        this.authService.isLoggedIn = true;
        localStorage.setItem('currentUser', JSON.stringify(data.email));
        this.router.navigate(['/food-order']);
      } 
      // else {
      //   this.router.navigate(['/login']);
      //   this.login.reset();
      // }
    });
  }

  public get Email(): FormControl {
    return this.login.get('email') as FormControl;
  }

  public get Password(): FormControl {
    return this.login.get('password') as FormControl;
  }

  



}
