import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { FriendsComponent } from "./pages/home/friends/friends.component";
import { FeedsComponent } from "./pages/home/feeds/feeds.component";
import { FeedsDetailsComponent } from "./pages/home/feeds/details/feedsdetails.component";
import { SignupComonent } from "./pages/signup/signup.component";
import { ModalViewComponent } from "./component/modal.view.component";
import { ListPickerModalViewComponent } from "./component/modal/listpicker.modal.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { CheckBoxComponent } from "./component/checkbox/checkbox.component";
import { ProfileComponent } from "./pages/profile/profile.component";


export const ROUTING_COMPONENTS = [

    CheckBoxComponent,
    ModalViewComponent,
    ListPickerModalViewComponent,

    LandingComponent,
    LoginComponent,
    SignupComonent,
    ProfileComponent,
    HomeComponent,
    FriendsComponent,
    FeedsComponent,
    FeedsDetailsComponent,

];

const routes: Routes = [
    { path: "", redirectTo: "/landing", pathMatch: "full" },
    { path: "landing", component: LandingComponent },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComonent },
    { path: "profilesetting", component: ProfileComponent },
    { path: "home", component: HomeComponent},
    { path: "feedsdetails/:id", component: FeedsDetailsComponent}
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

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }