import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate} from '@angular/router';
import { LoginComponent } from './login.component';
// import {MembersComponent} from './components/members/members.component';
//import { AuthGuard } from './auth.service';


const routes: Routes = [
  {path: '', component: LoginComponent}
  // changes this to guard a module insteas of a component
  // {path: 'members', component: MembersComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  // providers: [AuthGuard]
})
export class LoginRoutingModule { }
