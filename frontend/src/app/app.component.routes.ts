import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';

export const appComponentRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'hotels', component: HotelComponent }
    ]
  },
];
