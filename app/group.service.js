System.register(['@angular/http', '@angular/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var GroupService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            GroupService = (function () {
                function GroupService(http) {
                    this.http = http;
                }
                GroupService.prototype.get = function (mode, val) {
                    console.log([mode, val]);
                    var searchParams = new http_1.URLSearchParams();
                    for (var key in val) {
                        searchParams.set(key, val[key]);
                    }
                    var options = new http_1.RequestOptions({
                        search: searchParams
                    });
                    return this.http.get('search', options).map(function (response) { return response.json().groups; });
                };
                GroupService.prototype.add = function (mediaItem) {
                    return this.http.post('mediaitems', mediaItem)
                        .map(function (response) { });
                };
                GroupService.prototype.delete = function (mediaItem) {
                    return this.http.delete("mediaitems/" + mediaItem.id)
                        .map(function (response) { });
                };
                GroupService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GroupService);
                return GroupService;
            }());
            exports_1("GroupService", GroupService);
        }
    }
});
//# sourceMappingURL=group.service.js.map