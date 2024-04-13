import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { AuthGuardService } from './service/auth-guard.service';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'hotel', component: HotelComponent},
  //{ path: 'hotel', component: HotelComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
//imports:[RouterModule.forRoot(routes, {useHash: true})],
exports:[RouterModule]
})

export class AppRoutingModule{

}
