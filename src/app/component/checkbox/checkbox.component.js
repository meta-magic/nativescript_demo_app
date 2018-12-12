"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CheckBoxComponent = /** @class */ (function () {
    function CheckBoxComponent() {
    }
    CheckBoxComponent.prototype.ngOnInit = function () {
    };
    CheckBoxComponent.prototype.toggle = function () {
        this.isSelected = !this.isSelected;
    };
    __decorate([
        core_1.Input('label'),
        __metadata("design:type", String)
    ], CheckBoxComponent.prototype, "label", void 0);
    CheckBoxComponent = __decorate([
        core_1.Component({
            selector: 'check-box',
            templateUrl: 'app/component/checkbox/checkbox.component.html'
        })
    ], CheckBoxComponent);
    return CheckBoxComponent;
}());
exports.CheckBoxComponent = CheckBoxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBTXpEO0lBQUE7SUFjQSxDQUFDO0lBUkcsb0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQztJQVZlO1FBQWYsWUFBSyxDQUFDLE9BQU8sQ0FBQzs7b0RBQWdCO0lBRnRCLGlCQUFpQjtRQUo3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFHLFdBQVc7WUFDdEIsV0FBVyxFQUFHLGdEQUFnRDtTQUNqRSxDQUFDO09BQ1csaUJBQWlCLENBYzdCO0lBQUQsd0JBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdjaGVjay1ib3gnLFxuICAgIHRlbXBsYXRlVXJsIDogJ2FwcC9jb21wb25lbnQvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgQElucHV0KCdsYWJlbCcpIGxhYmVsIDogc3RyaW5nO1xuXG4gICAgaXNTZWxlY3RlZCA6IGJvb2xlYW47XG5cbiAgICBuZ09uSW5pdCgpe1xuXG4gICAgfVxuXG4gICAgdG9nZ2xlKCl7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9ICF0aGlzLmlzU2VsZWN0ZWQ7XG4gICAgfVxuICAgIFxufSJdfQ==