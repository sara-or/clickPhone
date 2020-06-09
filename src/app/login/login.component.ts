import { User } from './../user/user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user: User;

  constructor(private userService: UserService, private MyFormBuilder: FormBuilder) {
   }

  ngOnInit(): void
  {

  }
}
