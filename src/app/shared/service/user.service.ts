import { Injectable } from "@angular/core";
import { LoginModel } from "../models/login.model";
import { HttpClientModule } from "@angular/common/http";

@Injectable()
export class UserService {

    constructor(private http: HttpClientModule)
    {

    }

    authenticate(login:LoginModel) : boolean{
        console.log('User Service ',login);
        return true;
    }
}