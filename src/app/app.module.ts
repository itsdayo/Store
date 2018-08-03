import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { Routing } from './app.routing';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import {ShoppingService} from "./services/shopping.service.client"
import {UserService} from "./services/user.service.client";
import {ItemsService} from "./services/items.service.client";
import {SharedService} from "./services/shared.service.client";
import { WatchlistComponent } from './Components/watchlist/watchlist.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    ProfileComponent,
    CheckoutComponent,
    ShoppingCartComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [UserService, ShoppingService, SharedService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
