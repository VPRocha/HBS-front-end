import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'hotels', component: HotelComponent },
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{

}
