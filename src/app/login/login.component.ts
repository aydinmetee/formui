import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Users} from "../models/users";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  kisi: Users;

  testForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.minLength(5),Validators.required]),
    adress: new FormGroup({
      name: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl(''),
      town: new FormControl('')
    }),
  });



  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.kisi = Object.assign({}, this.testForm.value);
    this.kisi.adress = Object.assign({}, Object.assign({}, this.testForm.value).adress);
  }

  resetForm() {
    this.testForm.reset();
  }

}
