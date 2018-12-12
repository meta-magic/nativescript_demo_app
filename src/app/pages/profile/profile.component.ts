import { OnInit, Component, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { CountryModel } from "~/app/shared/models/country.model";
import { ListPickerModal } from "~/app/component/modal/lispicker.model";
import { ListPickerModalViewComponent } from "~/app/component/modal/listpicker.modal.component";
import { GenderModel } from "~/app/shared/models/gender.model";
import { ModalViewComponent } from "~/app/component/modal.view.component";
import { HumanStrengthModel } from "~/app/shared/models/humanstrength.model";
import { HumanValuesModel } from "~/app/shared/models/humanvalues.model";

@Component({
    selector : 'profile',
    providers: [ModalDialogService],
    templateUrl : 'app/pages/profile/profile.component.html'
})
export class ProfileComponent implements OnInit{

    genderModel: Array<GenderModel> = [];
    gender: GenderModel;

    humanStrengthModel: Array<HumanStrengthModel> = [];
    humanStrenth : HumanStrengthModel;

    humanValuesModel : Array<HumanValuesModel> = [];
    humanValues : HumanValuesModel;
    
    dob : Date;

    constructor(private modalService: ModalDialogService, private vcRef: ViewContainerRef){
        
        this.genderModel.push(new GenderModel("01","Male"));
        this.genderModel.push(new GenderModel("02","Female"));
        this.genderModel.push(new GenderModel("03","Other"));
        this.gender = this.genderModel[0];

        this.humanStrengthModel.push(new HumanStrengthModel("01","Flexiblity"));
        this.humanStrengthModel.push(new HumanStrengthModel("02","Patience"));
        this.humanStrengthModel.push(new HumanStrengthModel("03","Sensitivity"));
        this.humanStrenth = this.humanStrengthModel[0];

        this.humanValuesModel.push(new HumanValuesModel("01","Truthfullness"));
        this.humanValuesModel.push(new HumanValuesModel("02","Honesty"));
        this.humanValuesModel.push(new HumanValuesModel("03","Charity"));
        this.humanValues = this.humanValuesModel[0];

        this.dob = new Date();

    }
     
    ngOnInit(){

    }

    selectGender(){
        this.createModelView(this.genderModel).then(result => {
            if (this.validate(result)) {
                this.gender = result;
                console.log(result);
            }
        }).catch(error => this.handleError(error));
    }

    selectCity(){

    }

    selectProvience(){

    }

    selectOccupation(){

    }

    selectDOB(){
        this.createDateModelView().then(result => {
            if (this.validate(result)) {
                console.log(result);
                this.dob = result;
            }
        }).catch(error => this.handleError(error));
    }

    selectHumanStrength(){
        this.createModelView(this.humanStrengthModel).then(result => {
            if (this.validate(result)) {
                this.humanStrenth = result;
                console.log(result);
            }
        }).catch(error => this.handleError(error));
    }

    selectHumanValue(){
        this.createModelView(this.humanValuesModel).then(result => {
            if (this.validate(result)) {
                this.humanValues = result;
                console.log(result);
            }
        }).catch(error => this.handleError(error));
    }

    private createModelView(models : any[]): Promise<any> {
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: new ListPickerModal(models,'Done'),
            fullscreen: false,
        };

        return this.modalService.showModal(ListPickerModalViewComponent, options);
    }

    private createDateModelView(): Promise<any> {
        const today = new Date();
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: today,
            fullscreen: false,
        };

        return this.modalService.showModal(ModalViewComponent, options);
    }

    private validate(result: any) {
        return !!result;
    }

    private handleError(error: any) {
        alert("Please try again!");
        console.dir(error);
    }

}