import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(private tokenService: AngularTokenService) { }


  ngOnInit(): void {
    // console.log('test');
    // this.tokenService.signIn({
    //   login:    'user@example.com',
    //   password: 'monkey67'
    // }).subscribe(
    //   res => {
    //     console.log('auth response:', res);
    //     console.log('auth response headers: ', res.headers); // log the response header to show the auth token
    //     console.log('auth response body:', res.body); // log the response body to show the user
    //   },
    //   err => {
    //     console.error('auth error:', err);
    //   }
    // );
  }
}
