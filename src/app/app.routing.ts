import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {MainPageComponent} from "./Components/main-page/main-page.component";
import {CreateComponent} from "./Components/Create/create.component";

// Import all other components here


const APP_ROUTES : Routes = [
 { path : '', component : MainPageComponent},
 { path : 'user/:uid/main' , component: MainPageComponent},
 { path : 'create' , component: CreateComponent},
 // { path : 'login' , component:LoginComponent },
 // { path : 'register' , component:RegisterComponent },
 // { path : 'user/:uid/profile' , component: ProfileComponent},
 // so on
];


// Export the routes as module providers

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

