import { OnInit, Component } from "@angular/core";

import { LoginModel } from "../../shared/models/login.model";
import { UserService } from "~/app/shared/service/user.service";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
    selector : 'app-login',
    templateUrl : 'app/pages/login/login.component.html' 
})
export class LoginComponent implements OnInit{

    model : LoginModel;

    constructor(private router : RouterExtensions, private userService : UserService){
        this.model = new LoginModel();
    }

    ngOnInit(){

    }

    signin(){
        console.log(JSON.stringify(this.model));
        let route = "home";
        if(this.model.phone === '8378988445'){
            route = "profilesetting";
        }else{
        }
        this.router.navigate([route], {
            //clearHistory: true,
            animated: true
        });
    }

    signUp(){
        this.router.navigate(['signup'], {
            animated: true
        });
    }
}