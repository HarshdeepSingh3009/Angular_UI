System.register(['@angular/router', './home.component', './login/login-form.component', './groups/create-group.component', './groups/search-groups.component', './account/register.component', './account/user-details.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, login_form_component_1, create_group_component_1, search_groups_component_1, register_component_1, user_details_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (login_form_component_1_1) {
                login_form_component_1 = login_form_component_1_1;
            },
            function (create_group_component_1_1) {
                create_group_component_1 = create_group_component_1_1;
            },
            function (search_groups_component_1_1) {
                search_groups_component_1 = search_groups_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (user_details_component_1_1) {
                user_details_component_1 = user_details_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: 'add', component: create_group_component_1.CreateGroupComponent },
                { path: 'search', component: search_groups_component_1.SearchGroupComponent },
                { path: 'createuser', component: user_details_component_1.UserDetailsComponent },
                { path: 'login', component: login_form_component_1.LogInComponent },
                { path: 'register', component: register_component_1.RegisterComponent },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: '', pathMatch: 'full', redirectTo: 'home' }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map