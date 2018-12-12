import { OnInit, Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'feeds-details',
    templateUrl: 'app/pages/home/feeds/details/feedsdetails.component.html'
})
export class FeedsDetailsComponent implements OnInit {

    id: number;

    constructor(private router: RouterExtensions, private route: ActivatedRoute) {
        console.log("FeedsDetailsComponent****")
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id']; 
        });
    }
}