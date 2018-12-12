"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_model_1 = require("../../shared/models/login.model");
var user_service_1 = require("~/app/shared/service/user.service");
var router_1 = require("nativescript-angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.model = new login_model_1.LoginModel();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signin = function () {
        console.log(JSON.stringify(this.model));
        var route = "home";
        if (this.model.phone === '8378988445') {
            route = "profilesetting";
        }
        else {
        }
        this.router.navigate([route], {
            //clearHistory: true,
            animated: true
        });
    };
    LoginComponent.prototype.signUp = function () {
        this.router.navigate(['signup'], {
            animated: true
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: 'app/pages/login/login.component.html'
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELCtEQUE2RDtBQUM3RCxrRUFBZ0U7QUFDaEUsc0RBQStEO0FBTy9EO0lBSUksd0JBQW9CLE1BQXlCLEVBQVUsV0FBeUI7UUFBNUQsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUM1RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksd0JBQVUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ25CLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssWUFBWSxFQUFDO1lBQ2pDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztTQUM1QjthQUFJO1NBQ0o7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLHFCQUFxQjtZQUNyQixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0IsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTdCUSxjQUFjO1FBSjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUcsV0FBVztZQUN0QixXQUFXLEVBQUcsc0NBQXNDO1NBQ3ZELENBQUM7eUNBSytCLHlCQUFnQixFQUF3QiwwQkFBVztPQUp2RSxjQUFjLENBOEIxQjtJQUFELHFCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IExvZ2luTW9kZWwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy9sb2dpbi5tb2RlbFwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2hhcmVkL3NlcnZpY2UvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2FwcC1sb2dpbicsXG4gICAgdGVtcGxhdGVVcmwgOiAnYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sJyBcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICBtb2RlbCA6IExvZ2luTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgdXNlclNlcnZpY2UgOiBVc2VyU2VydmljZSl7XG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgTG9naW5Nb2RlbCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG5cbiAgICB9XG5cbiAgICBzaWduaW4oKXtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5tb2RlbCkpO1xuICAgICAgICBsZXQgcm91dGUgPSBcImhvbWVcIjtcbiAgICAgICAgaWYodGhpcy5tb2RlbC5waG9uZSA9PT0gJzgzNzg5ODg0NDUnKXtcbiAgICAgICAgICAgIHJvdXRlID0gXCJwcm9maWxlc2V0dGluZ1wiO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcm91dGVdLCB7XG4gICAgICAgICAgICAvL2NsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25VcCgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NpZ251cCddLCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG59Il19