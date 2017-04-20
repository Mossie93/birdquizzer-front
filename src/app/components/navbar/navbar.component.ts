import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  appName = "Birdquizzer.com";

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
