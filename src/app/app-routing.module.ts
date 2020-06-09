import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 {path: 'login',
  component: LoginComponent
},
{
  path: 'sign-up',
  component: SignUpComponent
}

  // {path:'edit/:id',component:user},-יש למלא בהתאם לאובייקט הנבחר
  // {path:'new user',component:user},-תוכן ריק
  // {path:'qestion/:id',component:'qestion',children:[
  //   {path:'new_anwser',component:'answer'},//-'qestion/:id/new  answer'
  // ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
