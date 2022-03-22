import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './homepage/signin/signin.component';
import { SingupComponent } from './homepage/singup/singup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations:[
    AppComponent,
    HomepageComponent,
    
    SigninComponent,
    SingupComponent,
    HeaderComponent,
    FooterComponent,
    
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
