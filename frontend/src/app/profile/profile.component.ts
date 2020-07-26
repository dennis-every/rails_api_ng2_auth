import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {AngularTokenService} from 'angular-token';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    public authTokenService: AngularTokenService,
    public authService: AuthService,
    private router: Router) {}

  logOut(): void{
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  ngOnInit(): void {
  }

}
