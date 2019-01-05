
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-bg-navbar',
  templateUrl: './bg-navbar.component.html',
  styleUrls: ['./bg-navbar.component.css']
})
export class BgNavbarComponent  {
  constructor(public afauth: AuthService  ) {
  }
 logout() {
   this.afauth.logout();

 }

}
