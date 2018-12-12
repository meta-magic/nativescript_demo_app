"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_client_1 = require("nativescript-angular/http-client");
var forms_1 = require("nativescript-angular/forms");
var app_component_1 = require("./app.component");
var user_service_1 = require("./shared/service/user.service");
var app_routing_1 = require("./app.routing");
var feeds_service_1 = require("./shared/service/feeds.service");
var friends_service_1 = require("./shared/service/friends.service");
var modal_view_component_1 = require("./component/modal.view.component");
var listpicker_modal_component_1 = require("./component/modal/listpicker.modal.component");
var oauth_service_1 = require("./shared/service/oauth.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent,
            ],
            exports: [http_client_1.NativeScriptHttpClientModule],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule,
            ],
            declarations: [
                app_component_1.AppComponent
            ].concat(app_routing_1.ROUTING_COMPONENTS),
            entryComponents: [modal_view_component_1.ModalViewComponent, listpicker_modal_component_1.ListPickerModalViewComponent],
            providers: [feeds_service_1.FeedsService, friends_service_1.FriendService, user_service_1.UserService, oauth_service_1.OAuthService],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QsZ0ZBQThFO0FBQzlFLGdFQUFnRjtBQUNoRixvREFBcUU7QUFFckUsaURBQStDO0FBQy9DLDhEQUE0RDtBQUM1RCw2Q0FBcUU7QUFDckUsZ0VBQThEO0FBQzlELG9FQUFpRTtBQUNqRSx5RUFBc0U7QUFDdEUsMkZBQTRGO0FBQzVGLGdFQUE4RDtBQXdCOUQ7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXJCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUUsQ0FBQywwQ0FBNEIsQ0FBQztZQUN2QyxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLCtCQUF1QjthQUUxQjtZQUNELFlBQVk7Z0JBQ1IsNEJBQVk7cUJBQ1QsZ0NBQWtCLENBQ3hCO1lBQ0QsZUFBZSxFQUFDLENBQUMseUNBQWtCLEVBQUMseURBQTRCLENBQUM7WUFDakUsU0FBUyxFQUFFLENBQUMsNEJBQVksRUFBQywrQkFBYSxFQUFFLDBCQUFXLEVBQUUsNEJBQVksQ0FBQztZQUNsRSxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2UvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlLCBST1VUSU5HX0NPTVBPTkVOVFMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgRmVlZHNTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2UvZmVlZHMuc2VydmljZVwiO1xuaW1wb3J0IHsgRnJpZW5kU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlL2ZyaWVuZHMuc2VydmljZVwiO1xuaW1wb3J0IHsgTW9kYWxWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50L21vZGFsLnZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMaXN0UGlja2VyTW9kYWxWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50L21vZGFsL2xpc3RwaWNrZXIubW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZS9vYXV0aC5zZXJ2aWNlXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgIF0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGVdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICAuLi5ST1VUSU5HX0NPTVBPTkVOVFNcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czpbTW9kYWxWaWV3Q29tcG9uZW50LExpc3RQaWNrZXJNb2RhbFZpZXdDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW0ZlZWRzU2VydmljZSxGcmllbmRTZXJ2aWNlLCBVc2VyU2VydmljZSwgT0F1dGhTZXJ2aWNlXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==