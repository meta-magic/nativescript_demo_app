"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var friends_service_1 = require("~/app/shared/service/friends.service");
var FriendsComponent = /** @class */ (function () {
    function FriendsComponent(friends) {
        this.friends = friends;
        this.data = [];
    }
    FriendsComponent.prototype.ngOnInit = function () {
        this.fetchFriends();
    };
    FriendsComponent.prototype.fetchFriends = function () {
        var _this = this;
        var resp;
        this.friends.fetchFriends()
            .subscribe(function (r) {
            resp = r;
        }, function (error) {
        }, function () {
            _this.data = resp;
        });
    };
    FriendsComponent = __decorate([
        core_1.Component({
            selector: 'friends',
            templateUrl: 'app/pages/home/friends/friends.component.html'
        }),
        __metadata("design:paramtypes", [friends_service_1.FriendService])
    ], FriendsComponent);
    return FriendsComponent;
}());
exports.FriendsComponent = FriendsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyx3RUFBcUU7QUFNckU7SUFJSSwwQkFBb0IsT0FBc0I7UUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsdUNBQVksR0FBWjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxJQUFVLENBQUM7UUFFZixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTthQUN0QixTQUFTLENBQUMsVUFBQyxDQUFDO1lBQ1QsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNiLENBQUMsRUFDRCxVQUFDLEtBQUs7UUFFTixDQUFDLEVBQ0Q7WUFDSSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUF6QlEsZ0JBQWdCO1FBSjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsK0NBQStDO1NBQy9ELENBQUM7eUNBSytCLCtCQUFhO09BSmpDLGdCQUFnQixDQTBCNUI7SUFBRCx1QkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGcmllbmRTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3NlcnZpY2UvZnJpZW5kcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmcmllbmRzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9ob21lL2ZyaWVuZHMvZnJpZW5kcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRnJpZW5kc0NvbXBvbmVudCB7XG4gICBcbiAgICBkYXRhIDogYW55W107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZyaWVuZHM6IEZyaWVuZFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5mZXRjaEZyaWVuZHMoKTtcbiAgICB9XG5cbiAgICBmZXRjaEZyaWVuZHMoKXtcbiAgICAgICAgbGV0IHJlc3AgOiBhbnk7XG5cbiAgICAgICAgdGhpcy5mcmllbmRzLmZldGNoRnJpZW5kcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyKSA9PntcbiAgICAgICAgICAgICAgICByZXNwID0gcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpPT57XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHJlc3A7XG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==