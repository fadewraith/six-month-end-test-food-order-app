import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpUser } from '../models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  allUsers: SignUpUser[] = [];
  // displayUsers: SignUpUser[] = [];

  signUpForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.signUpForm = this._fb.group({
      'firstName': this._fb.control('hello', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      'lastName': this._fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      'email': this._fb.control('', [Validators.required, Validators.email]),
      'password': this._fb.control('', Validators.required)
    })

    // this.showUsers();
  }

  addUser(data: SignUpUser) {
    console.log(data);
    this.allUsers.push(data);
    localStorage.setItem('users', JSON.stringify(this.allUsers));
    this.signUpForm.reset();
  }

  // showUsers() {
  //   const oldUsers = localStorage.getItem('users');
  //   if(oldUsers !== null) {
  //     this.allUsers = JSON.parse(oldUsers);
  //     for(let i = 0;i < this.allUsers.length;i++) {
  //       console.warn(`${i+1} is user ${this.allUsers[i].email}`);
  //     }
  //   }
  // }











  public get FirstName(): FormControl {
    return this.signUpForm.get('firstName') as FormControl;
  }

  public get LastName(): FormControl {
    return this.signUpForm.get('lastName') as FormControl;
  }

  public get Email(): FormControl {
    return this.signUpForm.get('email') as FormControl;
  }

  public get Password(): FormControl {
    return this.signUpForm.get('password') as FormControl;
  }

}
