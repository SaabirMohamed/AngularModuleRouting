import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire,
         AuthMethods,
         AuthProviders } from 'angularfire2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire, private router: Router) {

    this.af.auth.subscribe(auth => {
      if (auth) {
        // Todo add a members component inside login module [done]
        // create a route for in inside routing module. [done]
        // Guard the members url [done]
        this.router.navigateByUrl('/members');
      }
    });

   }


  ngOnInit() {
  }

}
