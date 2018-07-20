import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './Components/main-page/main-page.component';

import {Routing } from './app.routing';
import { CreateComponent } from './Components/Create/create.component';

import { UserService } from './services/user.service.client';
import { MainService } from './services/main.service.client';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [UserService,
  MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
