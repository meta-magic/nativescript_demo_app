import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";
import { UserService } from "./shared/service/user.service";
import { AppRoutingModule, ROUTING_COMPONENTS } from "./app.routing";
import { FeedsService } from "./shared/service/feeds.service";
import { FriendService } from "./shared/service/friends.service";
import { ModalViewComponent } from "./component/modal.view.component";
import { ListPickerModalViewComponent } from "./component/modal/listpicker.modal.component";
import { OAuthService } from "./shared/service/oauth.service";


@NgModule({
    bootstrap: [
        AppComponent,
    ],
    exports: [NativeScriptHttpClientModule],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        
    ],
    declarations: [
        AppComponent,
        ...ROUTING_COMPONENTS
    ],
    entryComponents:[ModalViewComponent,ListPickerModalViewComponent],
    providers: [FeedsService,FriendService, UserService, OAuthService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
