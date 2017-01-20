System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', './app.component', './login/login-form.component', "./account/register.component", "./account/user-details.component", "./groups/create-group.component", "./groups/search-groups.component", "./groups/searchgrid.component", 'ag-grid-ng2/main', "./home.component", './app.routing', "./group.service", "./mock-database"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, forms_1, http_1, app_component_1, login_form_component_1, register_component_1, user_details_component_1, create_group_component_1, search_groups_component_1, searchgrid_component_1, main_1, home_component_1, app_routing_1, group_service_1, mock_database_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (login_form_component_1_1) {
                login_form_component_1 = login_form_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (user_details_component_1_1) {
                user_details_component_1 = user_details_component_1_1;
            },
            function (create_group_component_1_1) {
                create_group_component_1 = create_group_component_1_1;
            },
            function (search_groups_component_1_1) {
                search_groups_component_1 = search_groups_component_1_1;
            },
            function (searchgrid_component_1_1) {
                searchgrid_component_1 = searchgrid_component_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (group_service_1_1) {
                group_service_1 = group_service_1_1;
            },
            function (mock_database_1_1) {
                mock_database_1 = mock_database_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.ReactiveFormsModule,
                            http_1.HttpModule,
                            main_1.AgGridModule.forRoot(),
                            app_routing_1.routing
                        ],
                        declarations: [app_component_1.AppComponent,
                            login_form_component_1.LogInComponent,
                            register_component_1.RegisterComponent,
                            user_details_component_1.UserDetailsComponent,
                            create_group_component_1.CreateGroupComponent,
                            search_groups_component_1.SearchGroupComponent,
                            searchgrid_component_1.SearchGridComponent,
                            home_component_1.HomeComponent
                        ],
                        bootstrap: [app_component_1.AppComponent],
                        providers: [
                            group_service_1.GroupService,
                            { provide: http_1.XHRBackend, useClass: mock_database_1.MockXHRBackend }
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map