import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../user/user.model';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
    myForm: FormGroup;
      constructor(private userService: UserService, private MyFormBuilder: FormBuilder) {
          this.myForm = this.MyFormBuilder.group({
          name: ['', Validators.required],
          pass: ['', Validators.required]
        });
       }
      arrUsers: User[];





      ngOnInit(): void {
       this.user =  this.userService.user;
       this.arrUsers = this.userService.GetArrUsers();
      }
      onSubmit(): void {
        const inputValue = this.myForm.value;
        const user: User = new User( inputValue.name, inputValue.pass );
        this.userService.pushNewUser(user);
      }
      logFormGroup(){
        console.log(this.myForm);
      }
      logFormControl(){
        console.log(this.myForm.controls.name);
        console.log(this.myForm.controls.name.value);
        console.log(this.myForm.controls.pass.value);
      }
      formReset(){
        this.myForm.reset();
      }

    }

