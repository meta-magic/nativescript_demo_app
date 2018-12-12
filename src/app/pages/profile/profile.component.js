"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var lispicker_model_1 = require("~/app/component/modal/lispicker.model");
var listpicker_modal_component_1 = require("~/app/component/modal/listpicker.modal.component");
var gender_model_1 = require("~/app/shared/models/gender.model");
var modal_view_component_1 = require("~/app/component/modal.view.component");
var humanstrength_model_1 = require("~/app/shared/models/humanstrength.model");
var humanvalues_model_1 = require("~/app/shared/models/humanvalues.model");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(modalService, vcRef) {
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.genderModel = [];
        this.humanStrengthModel = [];
        this.humanValuesModel = [];
        this.genderModel.push(new gender_model_1.GenderModel("01", "Male"));
        this.genderModel.push(new gender_model_1.GenderModel("02", "Female"));
        this.genderModel.push(new gender_model_1.GenderModel("03", "Other"));
        this.gender = this.genderModel[0];
        this.humanStrengthModel.push(new humanstrength_model_1.HumanStrengthModel("01", "Flexiblity"));
        this.humanStrengthModel.push(new humanstrength_model_1.HumanStrengthModel("02", "Patience"));
        this.humanStrengthModel.push(new humanstrength_model_1.HumanStrengthModel("03", "Sensitivity"));
        this.humanStrenth = this.humanStrengthModel[0];
        this.humanValuesModel.push(new humanvalues_model_1.HumanValuesModel("01", "Truthfullness"));
        this.humanValuesModel.push(new humanvalues_model_1.HumanValuesModel("02", "Honesty"));
        this.humanValuesModel.push(new humanvalues_model_1.HumanValuesModel("03", "Charity"));
        this.humanValues = this.humanValuesModel[0];
        this.dob = new Date();
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.selectGender = function () {
        var _this = this;
        this.createModelView(this.genderModel).then(function (result) {
            if (_this.validate(result)) {
                _this.gender = result;
                console.log(result);
            }
        }).catch(function (error) { return _this.handleError(error); });
    };
    ProfileComponent.prototype.selectCity = function () {
    };
    ProfileComponent.prototype.selectProvience = function () {
    };
    ProfileComponent.prototype.selectOccupation = function () {
    };
    ProfileComponent.prototype.selectDOB = function () {
        var _this = this;
        this.createDateModelView().then(function (result) {
            if (_this.validate(result)) {
                console.log(result);
                _this.dob = result;
            }
        }).catch(function (error) { return _this.handleError(error); });
    };
    ProfileComponent.prototype.selectHumanStrength = function () {
        var _this = this;
        this.createModelView(this.humanStrengthModel).then(function (result) {
            if (_this.validate(result)) {
                _this.humanStrenth = result;
                console.log(result);
            }
        }).catch(function (error) { return _this.handleError(error); });
    };
    ProfileComponent.prototype.selectHumanValue = function () {
        var _this = this;
        this.createModelView(this.humanValuesModel).then(function (result) {
            if (_this.validate(result)) {
                _this.humanValues = result;
                console.log(result);
            }
        }).catch(function (error) { return _this.handleError(error); });
    };
    ProfileComponent.prototype.createModelView = function (models) {
        var options = {
            viewContainerRef: this.vcRef,
            context: new lispicker_model_1.ListPickerModal(models, 'Done'),
            fullscreen: false,
        };
        return this.modalService.showModal(listpicker_modal_component_1.ListPickerModalViewComponent, options);
    };
    ProfileComponent.prototype.createDateModelView = function () {
        var today = new Date();
        var options = {
            viewContainerRef: this.vcRef,
            context: today,
            fullscreen: false,
        };
        return this.modalService.showModal(modal_view_component_1.ModalViewComponent, options);
    };
    ProfileComponent.prototype.validate = function (result) {
        return !!result;
    };
    ProfileComponent.prototype.handleError = function (error) {
        alert("Please try again!");
        console.dir(error);
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            providers: [modal_dialog_1.ModalDialogService],
            templateUrl: 'app/pages/profile/profile.component.html'
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService, core_1.ViewContainerRef])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSxrRUFBMkY7QUFFM0YseUVBQXdFO0FBQ3hFLCtGQUFnRztBQUNoRyxpRUFBK0Q7QUFDL0QsNkVBQTBFO0FBQzFFLCtFQUE2RTtBQUM3RSwyRUFBeUU7QUFPekU7SUFhSSwwQkFBb0IsWUFBZ0MsRUFBVSxLQUF1QjtRQUFqRSxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQVhyRixnQkFBVyxHQUF1QixFQUFFLENBQUM7UUFHckMsdUJBQWtCLEdBQThCLEVBQUUsQ0FBQztRQUduRCxxQkFBZ0IsR0FBNkIsRUFBRSxDQUFDO1FBTzVDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksMEJBQVcsQ0FBQyxJQUFJLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLDBCQUFXLENBQUMsSUFBSSxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSwwQkFBVyxDQUFDLElBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksd0NBQWtCLENBQUMsSUFBSSxFQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLHdDQUFrQixDQUFDLElBQUksRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxrQkFBa0IsQ0FB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Q0FBa0IsQ0FBQztZQUMvQixXQUFXLEVBQUcsMENBQTBDO1NBQzNELENBQUM7eUNBY29DLGlDQUFrQixFQUFpQix1QkFBZ0I7T0FiNUUsZ0JBQWdCLENBb0g1QjtJQUFELHVCQUFDO0NBQUEsQUFwSEQsSUFvSEM7QUFwSFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBDb3VudHJ5TW9kZWwgfSBmcm9tIFwifi9hcHAvc2hhcmVkL21vZGVscy9jb3VudHJ5Lm1vZGVsXCI7XG5pbXBvcnQgeyBMaXN0UGlja2VyTW9kYWwgfSBmcm9tIFwifi9hcHAvY29tcG9uZW50L21vZGFsL2xpc3BpY2tlci5tb2RlbFwiO1xuaW1wb3J0IHsgTGlzdFBpY2tlck1vZGFsVmlld0NvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC9jb21wb25lbnQvbW9kYWwvbGlzdHBpY2tlci5tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdlbmRlck1vZGVsIH0gZnJvbSBcIn4vYXBwL3NoYXJlZC9tb2RlbHMvZ2VuZGVyLm1vZGVsXCI7XG5pbXBvcnQgeyBNb2RhbFZpZXdDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvY29tcG9uZW50L21vZGFsLnZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIdW1hblN0cmVuZ3RoTW9kZWwgfSBmcm9tIFwifi9hcHAvc2hhcmVkL21vZGVscy9odW1hbnN0cmVuZ3RoLm1vZGVsXCI7XG5pbXBvcnQgeyBIdW1hblZhbHVlc01vZGVsIH0gZnJvbSBcIn4vYXBwL3NoYXJlZC9tb2RlbHMvaHVtYW52YWx1ZXMubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAncHJvZmlsZScsXG4gICAgcHJvdmlkZXJzOiBbTW9kYWxEaWFsb2dTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybCA6ICdhcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgZ2VuZGVyTW9kZWw6IEFycmF5PEdlbmRlck1vZGVsPiA9IFtdO1xuICAgIGdlbmRlcjogR2VuZGVyTW9kZWw7XG5cbiAgICBodW1hblN0cmVuZ3RoTW9kZWw6IEFycmF5PEh1bWFuU3RyZW5ndGhNb2RlbD4gPSBbXTtcbiAgICBodW1hblN0cmVudGggOiBIdW1hblN0cmVuZ3RoTW9kZWw7XG5cbiAgICBodW1hblZhbHVlc01vZGVsIDogQXJyYXk8SHVtYW5WYWx1ZXNNb2RlbD4gPSBbXTtcbiAgICBodW1hblZhbHVlcyA6IEh1bWFuVmFsdWVzTW9kZWw7XG4gICAgXG4gICAgZG9iIDogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5nZW5kZXJNb2RlbC5wdXNoKG5ldyBHZW5kZXJNb2RlbChcIjAxXCIsXCJNYWxlXCIpKTtcbiAgICAgICAgdGhpcy5nZW5kZXJNb2RlbC5wdXNoKG5ldyBHZW5kZXJNb2RlbChcIjAyXCIsXCJGZW1hbGVcIikpO1xuICAgICAgICB0aGlzLmdlbmRlck1vZGVsLnB1c2gobmV3IEdlbmRlck1vZGVsKFwiMDNcIixcIk90aGVyXCIpKTtcbiAgICAgICAgdGhpcy5nZW5kZXIgPSB0aGlzLmdlbmRlck1vZGVsWzBdO1xuXG4gICAgICAgIHRoaXMuaHVtYW5TdHJlbmd0aE1vZGVsLnB1c2gobmV3IEh1bWFuU3RyZW5ndGhNb2RlbChcIjAxXCIsXCJGbGV4aWJsaXR5XCIpKTtcbiAgICAgICAgdGhpcy5odW1hblN0cmVuZ3RoTW9kZWwucHVzaChuZXcgSHVtYW5TdHJlbmd0aE1vZGVsKFwiMDJcIixcIlBhdGllbmNlXCIpKTtcbiAgICAgICAgdGhpcy5odW1hblN0cmVuZ3RoTW9kZWwucHVzaChuZXcgSHVtYW5TdHJlbmd0aE1vZGVsKFwiMDNcIixcIlNlbnNpdGl2aXR5XCIpKTtcbiAgICAgICAgdGhpcy5odW1hblN0cmVudGggPSB0aGlzLmh1bWFuU3RyZW5ndGhNb2RlbFswXTtcblxuICAgICAgICB0aGlzLmh1bWFuVmFsdWVzTW9kZWwucHVzaChuZXcgSHVtYW5WYWx1ZXNNb2RlbChcIjAxXCIsXCJUcnV0aGZ1bGxuZXNzXCIpKTtcbiAgICAgICAgdGhpcy5odW1hblZhbHVlc01vZGVsLnB1c2gobmV3IEh1bWFuVmFsdWVzTW9kZWwoXCIwMlwiLFwiSG9uZXN0eVwiKSk7XG4gICAgICAgIHRoaXMuaHVtYW5WYWx1ZXNNb2RlbC5wdXNoKG5ldyBIdW1hblZhbHVlc01vZGVsKFwiMDNcIixcIkNoYXJpdHlcIikpO1xuICAgICAgICB0aGlzLmh1bWFuVmFsdWVzID0gdGhpcy5odW1hblZhbHVlc01vZGVsWzBdO1xuXG4gICAgICAgIHRoaXMuZG9iID0gbmV3IERhdGUoKTtcblxuICAgIH1cbiAgICAgXG4gICAgbmdPbkluaXQoKXtcblxuICAgIH1cblxuICAgIHNlbGVjdEdlbmRlcigpe1xuICAgICAgICB0aGlzLmNyZWF0ZU1vZGVsVmlldyh0aGlzLmdlbmRlck1vZGVsKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5kZXIgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgIH1cblxuICAgIHNlbGVjdENpdHkoKXtcblxuICAgIH1cblxuICAgIHNlbGVjdFByb3ZpZW5jZSgpe1xuXG4gICAgfVxuXG4gICAgc2VsZWN0T2NjdXBhdGlvbigpe1xuXG4gICAgfVxuXG4gICAgc2VsZWN0RE9CKCl7XG4gICAgICAgIHRoaXMuY3JlYXRlRGF0ZU1vZGVsVmlldygpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZG9iID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSk7XG4gICAgfVxuXG4gICAgc2VsZWN0SHVtYW5TdHJlbmd0aCgpe1xuICAgICAgICB0aGlzLmNyZWF0ZU1vZGVsVmlldyh0aGlzLmh1bWFuU3RyZW5ndGhNb2RlbCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGUocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaHVtYW5TdHJlbnRoID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcbiAgICB9XG5cbiAgICBzZWxlY3RIdW1hblZhbHVlKCl7XG4gICAgICAgIHRoaXMuY3JlYXRlTW9kZWxWaWV3KHRoaXMuaHVtYW5WYWx1ZXNNb2RlbCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGUocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaHVtYW5WYWx1ZXMgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlTW9kZWxWaWV3KG1vZGVscyA6IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcbiAgICAgICAgICAgIGNvbnRleHQ6IG5ldyBMaXN0UGlja2VyTW9kYWwobW9kZWxzLCdEb25lJyksXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKExpc3RQaWNrZXJNb2RhbFZpZXdDb21wb25lbnQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRGF0ZU1vZGVsVmlldygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXG4gICAgICAgICAgICBjb250ZXh0OiB0b2RheSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoTW9kYWxWaWV3Q29tcG9uZW50LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlKHJlc3VsdDogYW55KSB7XG4gICAgICAgIHJldHVybiAhIXJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgdHJ5IGFnYWluIVwiKTtcbiAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgIH1cblxufSJdfQ==