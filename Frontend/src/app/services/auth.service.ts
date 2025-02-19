import { Injectable } from '@angular/core';
import environments from '../environments/environments';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();

  private hasToken():boolean{
    return !!localStorage.getItem(environments.tokenName);
  }

  Login(token:string){
    localStorage.setItem(environments.tokenName, token);
    this.isLoggedIn.next(true);
  }

  Logout(){
    localStorage.removeItem(environments.tokenName);
    this.isLoggedIn.next(false);
  }

  getLoggedUser(){
    const token = localStorage.getItem(environments.tokenName);
    if (token){
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload);
      const decodedUTF8Payload = new TextDecoder('utf-8').decode(
        new Uint8Array(decodedPayload.split('').map(char => char.charCodeAt(0)))
      );
      return JSON.parse(decodedUTF8Payload);
    }
    return null;
  }

  isUserLoggedIn():boolean{
    return this.isLoggedIn.value;
  }
}
