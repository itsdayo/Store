import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {MainPageComponent} from "./Components/main-page/main-page.component";
import {CreateComponent} from "./Components/Create/create.component";
import {LoginComponent} from "./Components/login/login.component";
import {RegisterComponent} from "./Components/register/register.component";
import {ProfileComponent} from "./Components/profile/profile.component";

// Import all other components here


const APP_ROUTES : Routes = [
 { path : '', component : LoginComponent},
 { path : 'user/:uid/main' , component: MainPageComponent},
 { path : 'user/:uid/create' , component: CreateComponent},
 { path : 'login' , component:LoginComponent },
 { path : 'register' , component:RegisterComponent },
  { path : 'user/:uid/profile' , component: ProfileComponent},
 // so on
];


// Export the routes as module providers

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

