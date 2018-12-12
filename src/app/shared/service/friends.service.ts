import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class FriendService {

    constructor(private http : HttpClient){

    }

    fetchFriends(){
        return this.http.get("https://api.myjson.com/bins/c2ytu");
    }
}