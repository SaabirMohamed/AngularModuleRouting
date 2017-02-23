import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AngularFireModule } from 'angularfire2';
// import { MembersComponent } from './components/members/members.component';

// fb conf
export const firebaseConfig = {
    apiKey: "AIzaSyBrWSyWfM8-VrwvNrnoDp4VIgXjofJhVT4",
    authDomain: "chatmeup-fa6e8.firebaseapp.com",
    databaseURL: "https://chatmeup-fa6e8.firebaseio.com",
    storageBucket: "chatmeup-fa6e8.appspot.com",
    messagingSenderId: "343940577802"
};


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
