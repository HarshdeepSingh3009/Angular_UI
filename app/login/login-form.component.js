System.register(["@angular/core", "@angular/forms"], function(exports_1, context_1) {
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
    var LogInComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            LogInComponent = (function () {
                function LogInComponent(formBuilder) {
                    this.formBuilder = formBuilder;
                    this.pword = "";
                }
                LogInComponent.prototype.ngOnInit = function () {
                    this.form = this.formBuilder.group({
                        username: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        password: this.formBuilder.control('')
                    });
                };
                LogInComponent.prototype.onSubmit = function (loginForm) {
                    console.log(loginForm);
                    /* this.mediaItemService.add(mediaItem).subscribe(
                         ()=>{
                             this.router.navigate(['/', mediaItem.medium]);
                         }
                     );*/
                };
                LogInComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/login/login-form.component.html',
                        styleUrls: ['app/login/login-form.component.css']
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder])
                ], LogInComponent);
                return LogInComponent;
            }());
            exports_1("LogInComponent", LogInComponent);
        }
    }
});
//# sourceMappingURL=login-form.component.js.map