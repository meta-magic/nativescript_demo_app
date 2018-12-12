"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, route) {
        this.router = router;
        this.route = route;
        console.log("*******TabsComponent********");
    }
    HomeComponent.prototype.tabIndexChanged = function (event) {
        this.tabId = event.newIndex;
        if (this.tabId === 3) {
            this.router.navigate(['login'], {
                clearHistory: true,
                animated: true
            });
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'app/pages/home/home.html'
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            router_2.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxzREFBK0Q7QUFDL0QsMENBQWlEO0FBTWpEO0lBR0ksdUJBQW9CLE1BQXdCLEVBQ3hCLEtBQXFCO1FBRHJCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0QsdUNBQWUsR0FBZixVQUFnQixLQUFVO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUM1QixJQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFDO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzVCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFmUSxhQUFhO1FBSnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsMEJBQTBCO1NBQzFDLENBQUM7eUNBSThCLHlCQUFnQjtZQUNqQix1QkFBYztPQUpoQyxhQUFhLENBZ0J6QjtJQUFELG9CQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL2hvbWUvaG9tZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgICB0YWJJZCA6IG51bWJlcjtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKipUYWJzQ29tcG9uZW50KioqKioqKipcIik7XG4gICAgfVxuICAgIHRhYkluZGV4Q2hhbmdlZChldmVudDogYW55KXtcbiAgICAgICAgdGhpcy50YWJJZCA9IGV2ZW50Lm5ld0luZGV4O1xuICAgICAgICBpZih0aGlzLnRhYklkID09PSAzKXtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSwge1xuICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19