import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

// Avoid name not found warnings
let Auth0Lock = require('auth0-lock').default;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('NMuD2pwimaNMntSl0zi5VcI0FTPEHjZ7', 'birdquizzer.eu.auth0.com', {
    auth: {
      params: { scope: 'openid email' },
    }
  });

  constructor(private router: Router) {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.router.navigate(['/choose-quiz']);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    this.router.navigate(['/login']);
  }
}
