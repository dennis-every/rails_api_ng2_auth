import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthDialogComponent} from '../auth-dialog/auth-dialog.component';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('authDialog') authDialog: AuthDialogComponent;


  constructor(
    public authService: AuthService,
    private router: Router
    ) { }


  ngOnInit(): void {}

  logOut(): void {
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }



  presentAuthDialog(mode?: 'login'| 'register'): void {
    this.authDialog.openDialog(mode);
  }

}
