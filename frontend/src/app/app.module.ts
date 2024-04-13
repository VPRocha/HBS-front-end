import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { appComponentRoutes } from './app.component.routes';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(appComponentRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
