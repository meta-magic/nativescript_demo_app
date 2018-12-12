import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";

import { CountryModel } from "~/app/shared/models/country.model";
import { ModalViewComponent } from "~/app/component/modal.view.component";
import { ListPickerModalViewComponent } from "~/app/component/modal/listpicker.modal.component";
import { ListPickerModal } from "~/app/component/modal/lispicker.model";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector : 'signup',
    providers: [ModalDialogService],
    templateUrl : 'app/pages/signup/signup.component.html'
})
export class SignupComonent implements OnInit{
 
    showCountryCode : boolean = false;
    
    countrycode: Array<CountryModel> = [];
    
    country: CountryModel;

    
    constructor(private router : RouterExtensions, private modalService: ModalDialogService, private vcRef: ViewContainerRef) {
    }

    ngOnInit(){
        this.initiCountryCode();
    }

    private initiCountryCode(){
        this.countrycode.push(new CountryModel("01","US","USA"));
        this.countrycode.push(new CountryModel("91","IN","India"));
        this.countrycode.push(new CountryModel("004","UK","United Kingdom"));
        this.country = this.countrycode[0];
    }

    toggleCountryCode() : void {
        this.createModelView().then(result => {
            if (this.validate(result)) {
                this.country = result;
                console.log(result);
            }
        }).catch(error => this.handleError(error));
    }

    private createModelView(): Promise<any> {
        const today = new Date();
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: new ListPickerModal(this.countrycode,'Done'),
            fullscreen: false,
        };

        return this.modalService.showModal(ListPickerModalViewComponent, options);
    }

    private validate(result: any) {
        return !!result;
    }

    private handleError(error: any) {
        alert("Please try again!");
        console.dir(error);
    }

    registerUser(){
        this.router.navigate(['login'], {
            clearHistory: true,
            animated: true
        });
    }
}

