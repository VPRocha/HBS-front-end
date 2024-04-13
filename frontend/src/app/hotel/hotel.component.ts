import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  // standalone: true,
  // imports: [],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent {
  constructor(private router: Router) {}

  openReserveComponent() {
    this.router.navigate(['/reserve']);
    console.log(this.router)
  }
}
