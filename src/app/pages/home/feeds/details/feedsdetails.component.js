"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var FeedsDetailsComponent = /** @class */ (function () {
    function FeedsDetailsComponent(router, route) {
        this.router = router;
        this.route = route;
        console.log("FeedsDetailsComponent****");
    }
    FeedsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
    };
    FeedsDetailsComponent = __decorate([
        core_1.Component({
            selector: 'feeds-details',
            templateUrl: 'app/pages/home/feeds/details/feedsdetails.component.html'
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, router_2.ActivatedRoute])
    ], FeedsDetailsComponent);
    return FeedsDetailsComponent;
}());
exports.FeedsDetailsComponent = FeedsDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZHNkZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZlZWRzZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELDBDQUFpRDtBQU1qRDtJQUlJLCtCQUFvQixNQUF3QixFQUFVLEtBQXFCO1FBQXZELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzlCLEtBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBWlEscUJBQXFCO1FBSmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsMERBQTBEO1NBQzFFLENBQUM7eUNBSzhCLHlCQUFnQixFQUFpQix1QkFBYztPQUpsRSxxQkFBcUIsQ0FhakM7SUFBRCw0QkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmZWVkcy1kZXRhaWxzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9ob21lL2ZlZWRzL2RldGFpbHMvZmVlZHNkZXRhaWxzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGZWVkc0RldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZlZWRzRGV0YWlsc0NvbXBvbmVudCoqKipcIilcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmlkID0gK3BhcmFtc1snaWQnXTsgXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=