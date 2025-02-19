import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdComponent } from './components/ad/ad.component';

export const routes: Routes = [
    {
        path: "login", component: LoginComponent
    },
    {
        path: "registration", component: RegistrationComponent
    },
    {
        path: "ads", component: MainPageComponent
    },
    {
        path: "ads/:adID", component: AdComponent
    },
    {
        path: "", redirectTo: "ads", pathMatch: "full"
    },
    {
        path: "**", component: MainPageComponent
    }
];
