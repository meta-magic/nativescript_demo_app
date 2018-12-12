import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class FeedsService {

    constructor(private http : HttpClient){

    }

    fetchFeeds(){
        return this.http.get("https://jsonplaceholder.typicode.com/posts");
    }
}