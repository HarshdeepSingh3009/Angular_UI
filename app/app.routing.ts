import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LogInComponent } from './login/login-form.component';
import { CreateGroupComponent } from './groups/create-group.component';
import { SearchGroupComponent }  from './groups/search-groups.component';
import {RegisterComponent  } from './account/register.component';
import {UserDetailsComponent} from './account/user-details.component';

const appRoutes: Routes = [
    { path: 'add', component: CreateGroupComponent },
    { path: 'search', component: SearchGroupComponent },
    {path:'createuser',component: UserDetailsComponent},
    {path:'login',component: LogInComponent},
    {path:'register', component: RegisterComponent},
    {path:'home',component:HomeComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];


export const routing = RouterModule.forRoot(appRoutes);