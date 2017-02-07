import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  appName = "Birdquizzer.com";
}
