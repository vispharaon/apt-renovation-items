import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenovationitemComponent } from './renovationitem/renovationitem.component';
import { RenovationItemDetailComponent } from './renovation-item-detail/renovation-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RenovationitemComponent,
    RenovationItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
