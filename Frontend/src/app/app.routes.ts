import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdComponent } from './components/ad/ad.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { LoginGuard } from './guards/login.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreateComponent } from './components/create/create.component';

export const routes: Routes = [
    {
        path: "login", component: LoginComponent, canActivate: [LoginGuard]
    },
    {
        path: "registration", component: RegistrationComponent, canActivate: [LoginGuard]
    },
    {
        path: "ads", component: MainPageComponent, canActivate: [UserAuthGuard]
    },
    {
        path: "ad", canActivate: [UserAuthGuard],
        children: [
            {
                path: "create", component: CreateComponent
            },
            {
                path: ":adID", component: AdComponent
            },
        ] 
    },
    {
        path: "logout", component: LogoutComponent, canActivate: [UserAuthGuard]
    },
    {
        path: "", redirectTo: "ads", pathMatch: "full"
    },
    {
        path: "**", component: PageNotFoundComponent
    },
];
