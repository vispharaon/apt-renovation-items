import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenovationitemComponent } from './renovationitem/renovationitem.component';
import { RenovationItemDetailComponent } from './renovation-item-detail/renovation-item-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RenovationitemSearchComponent } from './renovationitem-search/renovationitem-search.component';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import { SigninComponent } from './signin/signin.component';

let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2018097774947187')
  }
]);

export function provideConfig(){
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    RenovationitemComponent,
    RenovationItemDetailComponent,
    DashboardComponent,
    RenovationitemSearchComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
