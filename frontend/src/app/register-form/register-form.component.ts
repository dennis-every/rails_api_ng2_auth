import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AngularTokenService} from 'angular-token';

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

  @Output() onFormResult = new EventEmitter<any>();

  constructor(private tokenAuthSerivce: AngularTokenService) { }

  ngOnInit(): void {}


  onSignUpSubmit(): void {

    this.tokenAuthSerivce.registerAccount(this.signUpUser).subscribe(

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
