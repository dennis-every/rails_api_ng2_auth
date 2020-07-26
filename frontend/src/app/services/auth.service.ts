import { Injectable } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { Subject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSignedIn$: Subject<boolean> = new Subject();

  constructor(public authService: AngularTokenService) {

    this.authService.validateToken().subscribe(
        res => res.status === 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
    );
  }

  logOutUser(): Observable<Response>{
    return this.authService.signOut().pipe(
      map(
        res => {
          this.userSignedIn$.next(false);
          console.log(res);
          return res;
        }
      )
    );
  }



  registerUser(signUpData: {login: string, password: string, passwordConfirmation: string}): Observable<Response>{
    return this.authService.registerAccount(signUpData).pipe(
      map(
        res => {
          this.userSignedIn$.next(true);
          console.log(res);
          return res;
        }
      )
    );
  }



  logInUser(signInData: {login: string, password: string}): Observable<Response>{
    return this.authService.signIn(signInData)
      .pipe(
        tap(res => {
          this.userSignedIn$.next(true);
          console.log(res);
          return res;
          }
        )
      );
    }

}
