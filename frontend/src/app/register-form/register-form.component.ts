import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  signUpUser = {
    login: '',
    password: '',
    passwordConfirmation: ''
  };

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onFormResult = new EventEmitter<any>();

  constructor(
    public authService: AuthService
    ) {}

  ngOnInit(): void {}


  onSignUpSubmit(): void {

    this.authService.registerUser(this.signUpUser).subscribe(
        (res) => {
          if (res.status === 200){
            this.onFormResult.emit({signedUp: true, res});
          }
        },
        (err) => {
          console.log(err.json());
          this.onFormResult.emit({signedUp: false, err});
        }
    );

  }
}
