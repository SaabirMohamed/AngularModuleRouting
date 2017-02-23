import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleGuard  } from './module.guard.service';
const routes: Routes = [
  { path: '', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'services', loadChildren: './modules/services/services.module#ServicesModule' },
  { path: 'contact', loadChildren: './modules/contact/contact.module#ContactModule' },
  { path: 'about', loadChildren: './modules/about/about.module#AboutModule' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'members', loadChildren: './modules/members/members.module#MembersModule', canLoad:[ModuleGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
