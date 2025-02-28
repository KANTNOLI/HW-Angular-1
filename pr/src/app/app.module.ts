import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CartComponent } from './cart/cart.component';
import { PictureComponent } from './picture/picture.component';
@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    CartComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
