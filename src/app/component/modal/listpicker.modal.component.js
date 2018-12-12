"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// >> passing-parameters
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var ListPickerModalViewComponent = /** @class */ (function () {
    function ListPickerModalViewComponent(params) {
        this.params = params;
        this.listPickerModel = params.context;
    }
    ListPickerModalViewComponent.prototype.ngOnInit = function () {
    };
    ListPickerModalViewComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        this.itemselected = this.listPickerModel.items[picker.selectedIndex];
    };
    ListPickerModalViewComponent.prototype.submit = function () {
        this.params.closeCallback(this.itemselected);
    };
    __decorate([
        core_1.ViewChild("listpicker"),
        __metadata("design:type", core_1.ElementRef)
    ], ListPickerModalViewComponent.prototype, "listPickerElement", void 0);
    ListPickerModalViewComponent = __decorate([
        core_1.Component({
            selector: 'modal-view',
            templateUrl: "app/component/modal/listpicker.modal.component.html",
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], ListPickerModalViewComponent);
    return ListPickerModalViewComponent;
}());
exports.ListPickerModalViewComponent = ListPickerModalViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHBpY2tlci5tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0cGlja2VyLm1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdCQUF3QjtBQUN4QixzQ0FBeUU7QUFDekUsa0VBQXNFO0FBU3RFO0lBUUksc0NBQW9CLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUMxQyxDQUFDO0lBRUQsK0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCwyREFBb0IsR0FBcEIsVUFBcUIsSUFBSTtRQUNyQixJQUFJLE1BQU0sR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCw2Q0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFoQndCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFvQixpQkFBVTsyRUFBQztJQU45Qyw0QkFBNEI7UUFKeEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRyxZQUFZO1lBQ3ZCLFdBQVcsRUFBRSxxREFBcUQ7U0FDckUsQ0FBQzt5Q0FTOEIsZ0NBQWlCO09BUnBDLDRCQUE0QixDQXVCeEM7SUFBRCxtQ0FBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IHBhc3NpbmctcGFyYW1ldGVyc1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlclwiO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBMaXN0UGlja2VyTW9kYWwgfSBmcm9tIFwiLi9saXNwaWNrZXIubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnbW9kYWwtdmlldycsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwL2NvbXBvbmVudC9tb2RhbC9saXN0cGlja2VyLm1vZGFsLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RQaWNrZXJNb2RhbFZpZXdDb21wb25lbnQgPFQ+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGl0ZW1zZWxlY3RlZCA6IFQ7XG5cbiAgICBsaXN0UGlja2VyTW9kZWwgOiBMaXN0UGlja2VyTW9kYWw8VD47XG5cbiAgICBAVmlld0NoaWxkKFwibGlzdHBpY2tlclwiKSBsaXN0UGlja2VyRWxlbWVudDogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xuICAgICAgICB0aGlzLmxpc3RQaWNrZXJNb2RlbCA9IHBhcmFtcy5jb250ZXh0O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3MpIDogdm9pZCB7XG4gICAgICAgIGxldCBwaWNrZXIgPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdDtcbiAgICAgICAgdGhpcy5pdGVtc2VsZWN0ZWQgPSB0aGlzLmxpc3RQaWNrZXJNb2RlbC5pdGVtc1twaWNrZXIuc2VsZWN0ZWRJbmRleF07XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHRoaXMuaXRlbXNlbGVjdGVkKTtcbiAgICB9XG59XG4iXX0=