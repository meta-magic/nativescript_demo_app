import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { FriendService } from '~/app/shared/service/friends.service';

@Component({
    selector: 'friends',
    templateUrl: 'app/pages/home/friends/friends.component.html'
})
export class FriendsComponent {
   
    data : any[];

    constructor(private friends: FriendService) {
        this.data = [];
    }

    ngOnInit(){
        this.fetchFriends();
    }

    fetchFriends(){
        let resp : any;

        this.friends.fetchFriends()
            .subscribe((r) =>{
                resp = r;
            },
            (error)=>{

            },
            ()=>{
                this.data = resp;
            })
    }
}
