System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.posts = [];
                    this.groups = [];
                    this.showcontent = false;
                    this.havegroups = false;
                    this.selectedgroup = 0;
                    this.groups = [
                        {
                            groupid: 1,
                            groupname: "pdp 123",
                            posts: [{
                                    id: 1,
                                    title: "Welcome !!",
                                    content: "hi there welcome to the new class",
                                    posteddate: new Date().toLocaleString(),
                                    postedby: "harsh"
                                },
                                {
                                    id: 2,
                                    title: "hello !!",
                                    content: "hello",
                                    posteddate: new Date().toLocaleString(),
                                    postedby: "harshpret"
                                },
                                {
                                    id: 3,
                                    title: "lets get started !!",
                                    content: "first post ",
                                    posteddate: new Date().toLocaleString(),
                                    postedby: "harshdeep"
                                }]
                        },
                        {
                            groupid: 2,
                            groupname: "algo 123",
                            posts: [{
                                    id: 1,
                                    title: "Welcome !!",
                                    content: "hi there welcome to the new class",
                                    posteddate: new Date().toLocaleString(),
                                    postedby: "harsh"
                                },
                                {
                                    id: 2,
                                    title: "hello !!",
                                    content: "hello",
                                    posteddate: new Date().toLocaleString(),
                                    postedby: "harshpret"
                                },
                                {
                                    id: 3,
                                    title: "lets get started !!",
                                    content: "first post ",
                                    posteddate: new Date().toLocaleString(),
                                    postedby: "harshdeep"
                                }]
                        }];
                    this.initializecontent();
                    if (this.groups.length > 0) {
                        this.havegroups = true;
                    }
                }
                HomeComponent.prototype.onClick = function (selectedpost) {
                    this.post = selectedpost;
                    this.showcontent = true;
                };
                HomeComponent.prototype.initializecontent = function () {
                    var tempgroups = this.groups;
                    this.groups = tempgroups.sort(function (a, b) { return a.id - b.id; });
                    this.posts = this.groups[0].posts;
                };
                HomeComponent.prototype.onChange = function (val) {
                    for (var i = 0; i < this.groups.length; i++) {
                        var group = this.groups[i];
                        if (group.id === val) {
                            this.selectedgroup = this.groups[i].id;
                            this.posts = this.groups[i].posts;
                        }
                    }
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: "mw-home",
                        templateUrl: "app/home.component.html",
                        styleUrls: ['app/login/login-form.component.css', 'app/home.component.css', 'Style/bootstrap.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map