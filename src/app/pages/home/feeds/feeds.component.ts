import { Component, OnInit } from '@angular/core';
import { FeedsService } from '~/app/shared/service/feeds.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'feeds',
    templateUrl: 'app/pages/home/feeds/feeds.component.html'
})
export class FeedsComponent  implements OnInit {

    data : any[];

    constructor(private router: RouterExtensions, private feeds: FeedsService) {
        this.data = [];
    }

    ngOnInit(){
        this.fetchFeeds();
    }

    fetchFeeds(){
        let resp : any;

        this.feeds.fetchFeeds()
            .subscribe((r) =>{
                resp = r;
            },
            (error)=>{

            },
            ()=>{
                this.data = resp;
            })
    }

    feedDetails(feed:any){
        console.log('feedsdetails ',feed);

        this.router.navigate(['feedsdetails/'+feed.id], {
            animated: true
        });
    }
}