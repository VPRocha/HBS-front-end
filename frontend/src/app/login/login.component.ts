import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  login: string = '';

  constructor(private router: Router) {}

  openHotelComponent() {
    this.router.navigate(['/hotel']);
 }
}
