import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { appComponentRoutes } from './app.component.routes';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
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
