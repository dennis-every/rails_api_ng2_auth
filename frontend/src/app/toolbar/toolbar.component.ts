import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthDialogComponent} from '../auth-dialog/auth-dialog.component';
import { AngularTokenService } from 'angular-token';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('authDialog') authDialog: AuthDialogComponent;


  constructor(public tokenAuthService: AngularTokenService) { }


  ngOnInit(): void {
  }

  presentAuthDialog(mode?: 'login'| 'register'): void {
    this.authDialog.openDialog(mode);
  }

}
