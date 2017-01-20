System.register(["@angular/core", '@angular/forms'], function(exports_1, context_1) {
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
    var core_1, forms_1;
    var UserDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            UserDetailsComponent = (function () {
                function UserDetailsComponent(formBuilder) {
                    this.formBuilder = formBuilder;
                    this.userid = 0;
                }
                UserDetailsComponent.prototype.ngOnInit = function () {
                    this.form = this.formBuilder.group({
                        firstname: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        lastname: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        university: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required
                        ])),
                        department: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required
                        ])),
                        email: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required
                        ])),
                        role: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required
                        ]))
                    });
                };
                UserDetailsComponent.prototype.onSubmit = function (userdetailsForm) {
                    console.log(userdetailsForm);
                    this.userid += 1;
                    this.userrole = userdetailsForm.role;
                    console.log([this.userid, this.userrole]);
                };
                UserDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'mw-user-details',
                        templateUrl: 'app/account/user-details.component.html',
                        styleUrls: ['app/login/login-form.component.css', 'app/account/user-details.component.css']
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder])
                ], UserDetailsComponent);
                return UserDetailsComponent;
            }());
            exports_1("UserDetailsComponent", UserDetailsComponent);
        }
    }
});
//# sourceMappingURL=user-details.component.js.map