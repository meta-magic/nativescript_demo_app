// >> passing-parameters
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { ListPicker } from "tns-core-modules/ui/list-picker/list-picker";
import { ListPickerModal } from "./lispicker.model";

@Component({
    selector : 'modal-view',
    templateUrl: "app/component/modal/listpicker.modal.component.html",
})
export class ListPickerModalViewComponent <T> implements OnInit {

    itemselected : T;

    listPickerModel : ListPickerModal<T>;

    @ViewChild("listpicker") listPickerElement: ElementRef;

    constructor(private params: ModalDialogParams) {
        this.listPickerModel = params.context;
    }

    ngOnInit() {
    }

    selectedIndexChanged(args) : void {
        let picker = <ListPicker>args.object;
        this.itemselected = this.listPickerModel.items[picker.selectedIndex];
    }

    submit() {
        this.params.closeCallback(this.itemselected);
    }
}
