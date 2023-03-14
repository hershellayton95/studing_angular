import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = true;
  isAdmin = true;

  constructor() {}

  isAuthenticaded() {
    return this.isLoggedIn;
  }

  isRoleAdmin() {
    return this.isAdmin;
  }
}
