"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// >> passing-parameters
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var ModalViewComponent = /** @class */ (function () {
    function ModalViewComponent(params) {
        this.params = params;
        this.currentdate = new Date(params.context);
    }
    ModalViewComponent.prototype.ngOnInit = function () {
        var datePicker = this.datePickerElement.nativeElement;
        datePicker.year = this.currentdate.getFullYear();
        datePicker.month = this.currentdate.getMonth() + 1;
        datePicker.day = this.currentdate.getDate();
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    };
    ModalViewComponent.prototype.submit = function () {
        var datePicker = this.datePickerElement.nativeElement;
        console.log("date result");
        console.log(datePicker.date);
        this.params.closeCallback(datePicker.date);
    };
    __decorate([
        core_1.ViewChild("datepicker"),
        __metadata("design:type", core_1.ElementRef)
    ], ModalViewComponent.prototype, "datePickerElement", void 0);
    ModalViewComponent = __decorate([
        core_1.Component({
            selector: 'modal-view',
            templateUrl: "app/component/modal.view.component.html",
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], ModalViewComponent);
    return ModalViewComponent;
}());
exports.ModalViewComponent = ModalViewComponent;
// << passing-parameters
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwudmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RhbC52aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdCQUF3QjtBQUN4QixzQ0FBeUU7QUFDekUsa0VBQXNFO0FBT3RFO0lBSUksNEJBQW9CLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxVQUFVLEdBQTJCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7UUFDOUUsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pELFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkQsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLG1DQUFNLEdBQWI7UUFDSSxJQUFJLFVBQVUsR0FBMkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztRQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBcEJ3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBb0IsaUJBQVU7aUVBQUM7SUFGOUMsa0JBQWtCO1FBSjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUcsWUFBWTtZQUN2QixXQUFXLEVBQUUseUNBQXlDO1NBQ3pELENBQUM7eUNBSzhCLGdDQUFpQjtPQUpwQyxrQkFBa0IsQ0F1QjlCO0lBQUQseUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxnREFBa0I7QUF3Qi9CLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IHBhc3NpbmctcGFyYW1ldGVyc1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdtb2RhbC12aWV3JyxcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAvY29tcG9uZW50L21vZGFsLnZpZXcuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgY3VycmVudGRhdGU6IERhdGU7XG4gICAgQFZpZXdDaGlsZChcImRhdGVwaWNrZXJcIikgZGF0ZVBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ZGF0ZSA9IG5ldyBEYXRlKHBhcmFtcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgbGV0IGRhdGVQaWNrZXI6IERhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj50aGlzLmRhdGVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGRhdGVQaWNrZXIueWVhciA9IHRoaXMuY3VycmVudGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgZGF0ZVBpY2tlci5tb250aCA9IHRoaXMuY3VycmVudGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gdGhpcy5jdXJyZW50ZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGRhdGVQaWNrZXIubWluRGF0ZSA9IG5ldyBEYXRlKDE5NzUsIDAsIDI5KTtcbiAgICAgICAgZGF0ZVBpY2tlci5tYXhEYXRlID0gbmV3IERhdGUoMjA0NSwgNCwgMTIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdWJtaXQoKSB7XG4gICAgICAgIGxldCBkYXRlUGlja2VyOiBEYXRlUGlja2VyID0gPERhdGVQaWNrZXI+dGhpcy5kYXRlUGlja2VyRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGUgcmVzdWx0XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRlUGlja2VyLmRhdGUpO1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKGRhdGVQaWNrZXIuZGF0ZSk7XG4gICAgfVxufVxuLy8gPDwgcGFzc2luZy1wYXJhbWV0ZXJzXG4iXX0=