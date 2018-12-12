import { OnInit, Component, Input } from "@angular/core";

@Component({
    selector : 'check-box',
    templateUrl : 'app/component/checkbox/checkbox.component.html'
})
export class CheckBoxComponent implements OnInit{

    @Input('label') label : string;

    isSelected : boolean;

    ngOnInit(){

    }

    toggle(){
        this.isSelected = !this.isSelected;
    }
    
}