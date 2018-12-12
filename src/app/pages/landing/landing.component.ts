import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { OAuthService } from "~/app/shared/service/oauth.service";
import { ITnsOAuthTokenResult } from "nativescript-oauth2";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'landing',
    templateUrl: 'app/pages/landing/landing.component.html'
})
export class LandingComponent implements OnInit {

    constructor(private router: RouterExtensions, private oauthService: OAuthService, private http : HttpClient) {

    }

    ngOnInit() {

    }

    navigate(link: string) {
        this.router.navigate([link], {
            animated: true
        });
    }

    validateLoginUsing(typeName: string, typeId: number) {

        this.oauthService
            .tnsOauthLogin("facebook")
            .then((result: ITnsOAuthTokenResult) => {
                console.log(" result " + result);
                console.log("back to app component with token " + result.accessToken);
                this.getUserFacebookProfile(result.accessToken);
            });
    }

    
    getUserFacebookProfile(accessToken:string){
        var fields = ['id', 'email', 'first_name', 'last_name', 'link', 'name','picture.type(small)'];
        var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',');

        let resp : any;

        this.http.get(graphApiUrl+'&access_token='+accessToken+'').subscribe((r) =>{
            resp = r;
        },
        (error)=>{

        },
        ()=>{
            console.log(resp);
            this.getFaceBookFriends(resp['id'],accessToken);
        })
    }

    getFaceBookFriends(userId: string, accessToken: string){

        var fields = ['id'];
        var graphApiUrl = 'https://graph.facebook.com/me/friends/?access_token='+accessToken+'&';
       // var graphApiUrl = 'https://graph.facebook.com/v3.2/'+userId+'/friends?fields=' + fields.join(',');
        //graphApiUrl = graphApiUrl+'&access_token='+accessToken+'';

        console.log(graphApiUrl);
        let resp : any;

        this.http.get(graphApiUrl).subscribe((r) =>{
            resp = r;
        },
        (error)=>{

        },
        ()=>{
            console.log(resp);
        })
    }
}