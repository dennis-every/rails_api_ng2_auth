import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  signInUser = {
    login: '',
    password: ''
  };

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onFormResult = new EventEmitter<any>();


  constructor(
    public authService: AuthService
    ) {}

  ngOnInit(): void {}

  onSignInSubmit(): void {

    this.authService.logInUser(this.signInUser)
    .subscribe(
      res => {
        if (res.status === 200) {
          this.onFormResult.emit({signedIn: true, res});
        }
      },
      err => {
        console.log('err: ', err);
        this.onFormResult.emit({signedIn: false, err});
      }
    );

  }

}
