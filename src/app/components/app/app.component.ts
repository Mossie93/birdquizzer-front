import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Location, Auth]
})
export class AppComponent {
  location: Location;
  constructor(
    location: Location,
    private auth: Auth
  ) { this.location = location; }
}
