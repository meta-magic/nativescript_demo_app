import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'app/pages/home/home.html'
})
export class HomeComponent {
    tabId : number;
    
    constructor(private router: RouterExtensions,
                private route: ActivatedRoute) {
                    console.log("*******TabsComponent********");
    }
    tabIndexChanged(event: any){
        this.tabId = event.newIndex;
        if(this.tabId === 3){
            this.router.navigate(['login'], {
                clearHistory: true,
                animated: true
            });
        }
    }
}