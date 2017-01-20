System.register(['@angular/core', '@angular/forms', "../group.service", "@angular/router"], function(exports_1, context_1) {
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
    var core_1, forms_1, group_service_1, router_1, router_2;
    var SearchGroupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (group_service_1_1) {
                group_service_1 = group_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            SearchGroupComponent = (function () {
                function SearchGroupComponent(formBuilder, groupService, router, activatedRoute) {
                    this.formBuilder = formBuilder;
                    this.groupService = groupService;
                    this.router = router;
                    this.activatedRoute = activatedRoute;
                    this.displaygrid = false;
                }
                SearchGroupComponent.prototype.ngOnInit = function () {
                    this.form = this.formBuilder.group({
                        groupname: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required
                        ])),
                        university: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required])),
                        department: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required
                        ])),
                        term: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required
                        ])),
                        course: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required
                        ]))
                    });
                };
                SearchGroupComponent.prototype.onSubmit = function (searchgroupform) {
                    var _this = this;
                    console.log(searchgroupform);
                    this.groups = [];
                    this.groupService.get("search", searchgroupform).subscribe(function (data) {
                        _this.groups = data;
                        console.log(_this.groups);
                    });
                    if (this.groups.length > 0) {
                        this.displaygrid = true;
                    }
                };
                SearchGroupComponent = __decorate([
                    core_1.Component({
                        selector: 'mw-search-groups',
                        templateUrl: 'app/groups/search-groups.component.html',
                        styleUrls: ['app/login/login-form.component.css', 'app/groups/search-groups.component.css']
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, group_service_1.GroupService, router_1.Router, router_2.ActivatedRoute])
                ], SearchGroupComponent);
                return SearchGroupComponent;
            }());
            exports_1("SearchGroupComponent", SearchGroupComponent);
        }
    }
});
//# sourceMappingURL=search-groups.component.js.map