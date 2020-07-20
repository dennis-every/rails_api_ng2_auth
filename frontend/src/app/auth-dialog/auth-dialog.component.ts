import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import 'materialize-css';
import {MaterializeAction} from 'angular2-materialize';


@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('auth-mode') authMode: 'login' | 'register' = 'login';
  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor() {
  }

  onLoginFormResult(e): void {
    if (e.signedIn) {
      this.closeDialog();
    }
    else{
      alert(e.err.json().errors[0]);
    }
  }

  onRegisterFormResult(e): void {
    if (e.signedUp) {
      this.closeDialog();
    }
    else{
      alert(e.err.json().errors.full_messages[0]);
    }
  }



  // tslint:disable-next-line: typedef
  openDialog(mode: 'login' | 'register' = 'login'){
    this.authMode = mode;
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  closeDialog(): void {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  ngOnInit(): void {
  }

  isLoginMode(): boolean { return this.authMode === 'login'; }
  isRegisterMode(): boolean { return this.authMode === 'register'; }


}
