import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  title = 'Sign up';

  ngOnInit(): void {
    if(!this.auth.authenticated()) { return; }
    this.router.navigate(['/choose-quiz']);
  }
}
