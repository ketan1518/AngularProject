import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auths: AuthService) { }

    login() {
      this.auths.login();
    }
}
