import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { WatchlistComponent } from './Components/watchlist/watchlist.component'
import { SellComponent } from './Components/Sell/sell/sell.component'
import { CreatePostComponent } from './Components/Sell/create-posting/create-posting.component'
import {  postingDescriptionComponent } from './Components/posting-description/posting-description.component'
// Import all other components here 

const APP_ROUTES : Routes = [
  { path : '', component : HomepageComponent},
  { path : 'login', component : LoginComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'user/:uid' , component: ProfileComponent},
  { path : 'watchlist' , component: WatchlistComponent, },
  { path : 'shoppingcart' , component: ShoppingCartComponent, },
  { path : 'user/:uid/post/:pid' , component: CheckoutComponent, },
   { path : 'sell' , component: SellComponent, },
    { path : 'createPost' , component: CreatePostComponent, },
     { path : 'postDescription' , component: postingDescriptionComponent, }
  // { path : 'user/:uid/items/:iid' , component: ShoppingCartComponent, },
  // { path : 'user/:uid/items/:iid/checkout' , component: CheckoutComponent, },


  // { path : 'user/:uid/website' , component: WebsiteListComponent, canActivate: [AuthGuard]},
  // { path : 'user/:uid/website/new' , component: WebsiteNewComponent, canActivate: [AuthGuard]},
  // { path : 'user/:uid/website/:wid' , component: WebsiteEditComponent, canActivate: [AuthGuard]},
  // { path : 'user/:uid/website/:wid/page' , component: PageListComponent, canActivate: [AuthGuard]},
  // { path : 'user/:uid/website/:wid/page/new' , component: PageNewComponent, canActivate: [AuthGuard]},
  // { path : 'user/:uid/website/:wid/page/:pid' , component: PageEditComponent, canActivate: [AuthGuard]},
  // { path : 'user/:uid/website/:wid/page/:pid/widget' , component: WidgetListComponent, canActivate: [AuthGuard]},
  // { path : 'user/:uid/website/:wid/page/:pid/widget/new' , component: WidgetChooserComponent, canActivate: [AuthGuard]},
  // { path : 'user/:uid/website/:wid/page/:pid/widget/:wgid' , component: WidgetEditComponent, canActivate: [AuthGuard]},
  // { path : 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr' , component: FlickrImageSearchComponent, canActivate: [AuthGuard]}

  // so on
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
