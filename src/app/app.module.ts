import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { HttpModule } from '@angular/http';
import { Routing } from './app.routing';
import { CreateComponent } from './Components/Create/create.component';

import { UserService } from './services/user.service.client';
import { MainService } from './services/main.service.client';
import { ProfileComponent } from './Components/profile/profile.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CreateComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
    HttpModule
  ],
  providers: [UserService,
  MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
