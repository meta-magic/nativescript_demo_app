"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./pages/login/login.component");
var home_component_1 = require("./pages/home/home.component");
var friends_component_1 = require("./pages/home/friends/friends.component");
var feeds_component_1 = require("./pages/home/feeds/feeds.component");
var feedsdetails_component_1 = require("./pages/home/feeds/details/feedsdetails.component");
var signup_component_1 = require("./pages/signup/signup.component");
var modal_view_component_1 = require("./component/modal.view.component");
var listpicker_modal_component_1 = require("./component/modal/listpicker.modal.component");
var landing_component_1 = require("./pages/landing/landing.component");
var checkbox_component_1 = require("./component/checkbox/checkbox.component");
var profile_component_1 = require("./pages/profile/profile.component");
exports.ROUTING_COMPONENTS = [
    checkbox_component_1.CheckBoxComponent,
    modal_view_component_1.ModalViewComponent,
    listpicker_modal_component_1.ListPickerModalViewComponent,
    landing_component_1.LandingComponent,
    login_component_1.LoginComponent,
    signup_component_1.SignupComonent,
    profile_component_1.ProfileComponent,
    home_component_1.HomeComponent,
    friends_component_1.FriendsComponent,
    feeds_component_1.FeedsComponent,
    feedsdetails_component_1.FeedsDetailsComponent,
];
var routes = [
    { path: "", redirectTo: "/landing", pathMatch: "full" },
    { path: "landing", component: landing_component_1.LandingComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "signup", component: signup_component_1.SignupComonent },
    { path: "profilesetting", component: profile_component_1.ProfileComponent },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "feedsdetails/:id", component: feedsdetails_component_1.FeedsDetailsComponent }
];
// const routes: Routes = [
//     { path: "", redirectTo: "/login", pathMatch: "full" },
//     { path: "login", component: LoginComponent },
//     { path: "home-main", redirectTo: "/home/(firstTab:tabone//secondTab:tabtwo)" },
//     {
//         path: "home", component: HomeComponent, children: [
//             { path: "tabone", component: FeedsComponent, outlet: "firstTab" },
//             { path: "tabtwo", component: FriendsComponent, outlet: "secondTab" }
//         ]
//     }
// ];
// const routes1: Routes = [
//     { path: "", redirectTo: "/(firstTab:tabone//secondTab:tabtwo)", pathMatch: "full" },
//     { path: "login", component: LoginComponent },
//     { path: "tabone", component: FriendsComponent, outlet: "firstTab" },
//     { path: "tabtwo", component: FeedsComponent, outlet: "secondTab" }
// ];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsaUVBQStEO0FBQy9ELDhEQUE0RDtBQUM1RCw0RUFBMEU7QUFDMUUsc0VBQW9FO0FBQ3BFLDRGQUEwRjtBQUMxRixvRUFBaUU7QUFDakUseUVBQXNFO0FBQ3RFLDJGQUE0RjtBQUM1Rix1RUFBcUU7QUFDckUsOEVBQTRFO0FBQzVFLHVFQUFxRTtBQUd4RCxRQUFBLGtCQUFrQixHQUFHO0lBRTlCLHNDQUFpQjtJQUNqQix5Q0FBa0I7SUFDbEIseURBQTRCO0lBRTVCLG9DQUFnQjtJQUNoQixnQ0FBYztJQUNkLGlDQUFjO0lBQ2Qsb0NBQWdCO0lBQ2hCLDhCQUFhO0lBQ2Isb0NBQWdCO0lBQ2hCLGdDQUFjO0lBQ2QsOENBQXFCO0NBRXhCLENBQUM7QUFFRixJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7SUFDaEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsaUNBQWMsRUFBRTtJQUM3QyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7SUFDdkQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFDO0lBQ3pDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSw4Q0FBcUIsRUFBQztDQUNoRSxDQUFDO0FBRUYsMkJBQTJCO0FBQzNCLDZEQUE2RDtBQUM3RCxvREFBb0Q7QUFDcEQsc0ZBQXNGO0FBQ3RGLFFBQVE7QUFDUiw4REFBOEQ7QUFDOUQsaUZBQWlGO0FBQ2pGLG1GQUFtRjtBQUNuRixZQUFZO0FBQ1osUUFBUTtBQUNSLEtBQUs7QUFFTCw0QkFBNEI7QUFDNUIsMkZBQTJGO0FBQzNGLG9EQUFvRDtBQUNwRCwyRUFBMkU7QUFDM0UseUVBQXlFO0FBQ3pFLEtBQUs7QUFNTDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRnJpZW5kc0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2hvbWUvZnJpZW5kcy9mcmllbmRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmVlZHNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9ob21lL2ZlZWRzL2ZlZWRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmVlZHNEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaG9tZS9mZWVkcy9kZXRhaWxzL2ZlZWRzZGV0YWlscy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNpZ251cENvbW9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1vZGFsVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudC9tb2RhbC52aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdFBpY2tlck1vZGFsVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudC9tb2RhbC9saXN0cGlja2VyLm1vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGFuZGluZ0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnRcIjtcbmltcG9ydCB7IENoZWNrQm94Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50L2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcblxuXG5leHBvcnQgY29uc3QgUk9VVElOR19DT01QT05FTlRTID0gW1xuXG4gICAgQ2hlY2tCb3hDb21wb25lbnQsXG4gICAgTW9kYWxWaWV3Q29tcG9uZW50LFxuICAgIExpc3RQaWNrZXJNb2RhbFZpZXdDb21wb25lbnQsXG5cbiAgICBMYW5kaW5nQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIFNpZ251cENvbW9uZW50LFxuICAgIFByb2ZpbGVDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBGcmllbmRzQ29tcG9uZW50LFxuICAgIEZlZWRzQ29tcG9uZW50LFxuICAgIEZlZWRzRGV0YWlsc0NvbXBvbmVudCxcblxuXTtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sYW5kaW5nXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwibGFuZGluZ1wiLCBjb21wb25lbnQ6IExhbmRpbmdDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJzaWdudXBcIiwgY29tcG9uZW50OiBTaWdudXBDb21vbmVudCB9LFxuICAgIHsgcGF0aDogXCJwcm9maWxlc2V0dGluZ1wiLCBjb21wb25lbnQ6IFByb2ZpbGVDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJmZWVkc2RldGFpbHMvOmlkXCIsIGNvbXBvbmVudDogRmVlZHNEZXRhaWxzQ29tcG9uZW50fVxuXTtcblxuLy8gY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4vLyAgICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4vLyAgICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbi8vICAgICB7IHBhdGg6IFwiaG9tZS1tYWluXCIsIHJlZGlyZWN0VG86IFwiL2hvbWUvKGZpcnN0VGFiOnRhYm9uZS8vc2Vjb25kVGFiOnRhYnR3bylcIiB9LFxuLy8gICAgIHtcbi8vICAgICAgICAgcGF0aDogXCJob21lXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgY2hpbGRyZW46IFtcbi8vICAgICAgICAgICAgIHsgcGF0aDogXCJ0YWJvbmVcIiwgY29tcG9uZW50OiBGZWVkc0NvbXBvbmVudCwgb3V0bGV0OiBcImZpcnN0VGFiXCIgfSxcbi8vICAgICAgICAgICAgIHsgcGF0aDogXCJ0YWJ0d29cIiwgY29tcG9uZW50OiBGcmllbmRzQ29tcG9uZW50LCBvdXRsZXQ6IFwic2Vjb25kVGFiXCIgfVxuLy8gICAgICAgICBdXG4vLyAgICAgfVxuLy8gXTtcblxuLy8gY29uc3Qgcm91dGVzMTogUm91dGVzID0gW1xuLy8gICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvKGZpcnN0VGFiOnRhYm9uZS8vc2Vjb25kVGFiOnRhYnR3bylcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuLy8gICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4vLyAgICAgeyBwYXRoOiBcInRhYm9uZVwiLCBjb21wb25lbnQ6IEZyaWVuZHNDb21wb25lbnQsIG91dGxldDogXCJmaXJzdFRhYlwiIH0sXG4vLyAgICAgeyBwYXRoOiBcInRhYnR3b1wiLCBjb21wb25lbnQ6IEZlZWRzQ29tcG9uZW50LCBvdXRsZXQ6IFwic2Vjb25kVGFiXCIgfVxuLy8gXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=