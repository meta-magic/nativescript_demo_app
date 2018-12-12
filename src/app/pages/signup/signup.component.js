"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var country_model_1 = require("~/app/shared/models/country.model");
var listpicker_modal_component_1 = require("~/app/component/modal/listpicker.modal.component");
var lispicker_model_1 = require("~/app/component/modal/lispicker.model");
var router_1 = require("nativescript-angular/router");
var SignupComonent = /** @class */ (function () {
    function SignupComonent(router, modalService, vcRef) {
        this.router = router;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.showCountryCode = false;
        this.countrycode = [];
    }
    SignupComonent.prototype.ngOnInit = function () {
        this.initiCountryCode();
    };
    SignupComonent.prototype.initiCountryCode = function () {
        this.countrycode.push(new country_model_1.CountryModel("01", "US", "USA"));
        this.countrycode.push(new country_model_1.CountryModel("91", "IN", "India"));
        this.countrycode.push(new country_model_1.CountryModel("004", "UK", "United Kingdom"));
        this.country = this.countrycode[0];
    };
    SignupComonent.prototype.toggleCountryCode = function () {
        var _this = this;
        this.createModelView().then(function (result) {
            if (_this.validate(result)) {
                _this.country = result;
                console.log(result);
            }
        }).catch(function (error) { return _this.handleError(error); });
    };
    SignupComonent.prototype.createModelView = function () {
        var today = new Date();
        var options = {
            viewContainerRef: this.vcRef,
            context: new lispicker_model_1.ListPickerModal(this.countrycode, 'Done'),
            fullscreen: false,
        };
        return this.modalService.showModal(listpicker_modal_component_1.ListPickerModalViewComponent, options);
    };
    SignupComonent.prototype.validate = function (result) {
        return !!result;
    };
    SignupComonent.prototype.handleError = function (error) {
        alert("Please try again!");
        console.dir(error);
    };
    SignupComonent.prototype.registerUser = function () {
        this.router.navigate(['login'], {
            clearHistory: true,
            animated: true
        });
    };
    SignupComonent = __decorate([
        core_1.Component({
            selector: 'signup',
            providers: [modal_dialog_1.ModalDialogService],
            templateUrl: 'app/pages/signup/signup.component.html'
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, modal_dialog_1.ModalDialogService, core_1.ViewContainerRef])
    ], SignupComonent);
    return SignupComonent;
}());
exports.SignupComonent = SignupComonent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFFcEUsa0VBQTJGO0FBRTNGLG1FQUFpRTtBQUVqRSwrRkFBZ0c7QUFDaEcseUVBQXdFO0FBQ3hFLHNEQUErRDtBQU8vRDtJQVNJLHdCQUFvQixNQUF5QixFQUFVLFlBQWdDLEVBQVUsS0FBdUI7UUFBcEcsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQVB4SCxvQkFBZSxHQUFhLEtBQUssQ0FBQztRQUVsQyxnQkFBVyxHQUF3QixFQUFFLENBQUM7SUFNdEMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8seUNBQWdCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSw0QkFBWSxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLDRCQUFZLENBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksNEJBQVksQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDBDQUFpQixHQUFqQjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDOUIsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN2QixLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN2QjtRQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU8sd0NBQWUsR0FBdkI7UUFDSSxJQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQU0sT0FBTyxHQUF1QjtZQUNoQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztZQUM1QixPQUFPLEVBQUUsSUFBSSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsTUFBTSxDQUFDO1lBQ3JELFVBQVUsRUFBRSxLQUFLO1NBQ3BCLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHlEQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTyxpQ0FBUSxHQUFoQixVQUFpQixNQUFXO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBRU8sb0NBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUMxQixLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxxQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBekRRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRyxRQUFRO1lBQ25CLFNBQVMsRUFBRSxDQUFDLGlDQUFrQixDQUFDO1lBQy9CLFdBQVcsRUFBRyx3Q0FBd0M7U0FDekQsQ0FBQzt5Q0FVK0IseUJBQWdCLEVBQXdCLGlDQUFrQixFQUFpQix1QkFBZ0I7T0FUL0csY0FBYyxDQTBEMUI7SUFBRCxxQkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcblxuaW1wb3J0IHsgQ291bnRyeU1vZGVsIH0gZnJvbSBcIn4vYXBwL3NoYXJlZC9tb2RlbHMvY291bnRyeS5tb2RlbFwiO1xuaW1wb3J0IHsgTW9kYWxWaWV3Q29tcG9uZW50IH0gZnJvbSBcIn4vYXBwL2NvbXBvbmVudC9tb2RhbC52aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdFBpY2tlck1vZGFsVmlld0NvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC9jb21wb25lbnQvbW9kYWwvbGlzdHBpY2tlci5tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpc3RQaWNrZXJNb2RhbCB9IGZyb20gXCJ+L2FwcC9jb21wb25lbnQvbW9kYWwvbGlzcGlja2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdzaWdudXAnLFxuICAgIHByb3ZpZGVyczogW01vZGFsRGlhbG9nU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmwgOiAnYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbW9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuIFxuICAgIHNob3dDb3VudHJ5Q29kZSA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBcbiAgICBjb3VudHJ5Y29kZTogQXJyYXk8Q291bnRyeU1vZGVsPiA9IFtdO1xuICAgIFxuICAgIGNvdW50cnk6IENvdW50cnlNb2RlbDtcblxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuaW5pdGlDb3VudHJ5Q29kZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlDb3VudHJ5Q29kZSgpe1xuICAgICAgICB0aGlzLmNvdW50cnljb2RlLnB1c2gobmV3IENvdW50cnlNb2RlbChcIjAxXCIsXCJVU1wiLFwiVVNBXCIpKTtcbiAgICAgICAgdGhpcy5jb3VudHJ5Y29kZS5wdXNoKG5ldyBDb3VudHJ5TW9kZWwoXCI5MVwiLFwiSU5cIixcIkluZGlhXCIpKTtcbiAgICAgICAgdGhpcy5jb3VudHJ5Y29kZS5wdXNoKG5ldyBDb3VudHJ5TW9kZWwoXCIwMDRcIixcIlVLXCIsXCJVbml0ZWQgS2luZ2RvbVwiKSk7XG4gICAgICAgIHRoaXMuY291bnRyeSA9IHRoaXMuY291bnRyeWNvZGVbMF07XG4gICAgfVxuXG4gICAgdG9nZ2xlQ291bnRyeUNvZGUoKSA6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZU1vZGVsVmlldygpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnkgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlTW9kZWxWaWV3KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcbiAgICAgICAgICAgIGNvbnRleHQ6IG5ldyBMaXN0UGlja2VyTW9kYWwodGhpcy5jb3VudHJ5Y29kZSwnRG9uZScpLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChMaXN0UGlja2VyTW9kYWxWaWV3Q29tcG9uZW50LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlKHJlc3VsdDogYW55KSB7XG4gICAgICAgIHJldHVybiAhIXJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgdHJ5IGFnYWluIVwiKTtcbiAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyVXNlcigpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10sIHtcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuIl19