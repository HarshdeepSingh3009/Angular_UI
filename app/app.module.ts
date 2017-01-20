import  { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import {  HttpModule, XHRBackend} from '@angular/http';

import { AppComponent } from './app.component';
import {LogInComponent } from './login/login-form.component';
import {RegisterComponent} from "./account/register.component";
import { UserDetailsComponent } from "./account/user-details.component";
import {CreateGroupComponent } from "./groups/create-group.component";
import{ SearchGroupComponent } from "./groups/search-groups.component";
import { SearchGridComponent } from  "./groups/searchgrid.component";
import {AgGridModule} from 'ag-grid-ng2/main';
import { HomeComponent } from "./home.component";
import { routing } from './app.routing';
import { GroupService } from "./group.service";
import {MockXHRBackend}  from "./mock-database";
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        AgGridModule.forRoot(),
        routing
    ],
    declarations: [AppComponent,
    LogInComponent,
    RegisterComponent,
    UserDetailsComponent,
    CreateGroupComponent,
    SearchGroupComponent,
    SearchGridComponent,
    HomeComponent
    ],
    bootstrap:[ AppComponent],
    providers:[
        GroupService,
        {provide:XHRBackend,useClass:MockXHRBackend}
    ]
})

export class AppModule {}