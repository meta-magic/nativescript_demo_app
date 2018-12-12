"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var feeds_service_1 = require("~/app/shared/service/feeds.service");
var router_1 = require("nativescript-angular/router");
var FeedsComponent = /** @class */ (function () {
    function FeedsComponent(router, feeds) {
        this.router = router;
        this.feeds = feeds;
        this.data = [];
    }
    FeedsComponent.prototype.ngOnInit = function () {
        this.fetchFeeds();
    };
    FeedsComponent.prototype.fetchFeeds = function () {
        var _this = this;
        var resp;
        this.feeds.fetchFeeds()
            .subscribe(function (r) {
            resp = r;
        }, function (error) {
        }, function () {
            _this.data = resp;
        });
    };
    FeedsComponent.prototype.feedDetails = function (feed) {
        console.log('feedsdetails ', feed);
        this.router.navigate(['feedsdetails/' + feed.id], {
            animated: true
        });
    };
    FeedsComponent = __decorate([
        core_1.Component({
            selector: 'feeds',
            templateUrl: 'app/pages/home/feeds/feeds.component.html'
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, feeds_service_1.FeedsService])
    ], FeedsComponent);
    return FeedsComponent;
}());
exports.FeedsComponent = FeedsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVlZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG9FQUFrRTtBQUNsRSxzREFBK0Q7QUFNL0Q7SUFJSSx3QkFBb0IsTUFBd0IsRUFBVSxLQUFtQjtRQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDckUsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFBQSxpQkFhQztRQVpHLElBQUksSUFBVSxDQUFDO1FBRWYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7YUFDbEIsU0FBUyxDQUFDLFVBQUMsQ0FBQztZQUNULElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixDQUFDLEVBQ0QsVUFBQyxLQUFLO1FBRU4sQ0FBQyxFQUNEO1lBQ0ksS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLElBQVE7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLEdBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQzVDLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqQ1EsY0FBYztRQUoxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLDJDQUEyQztTQUMzRCxDQUFDO3lDQUs4Qix5QkFBZ0IsRUFBaUIsNEJBQVk7T0FKaEUsY0FBYyxDQWtDMUI7SUFBRCxxQkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlZWRzU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9zZXJ2aWNlL2ZlZWRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmVlZHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL2hvbWUvZmVlZHMvZmVlZHMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZlZWRzQ29tcG9uZW50ICBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBkYXRhIDogYW55W107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBmZWVkczogRmVlZHNTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuZmV0Y2hGZWVkcygpO1xuICAgIH1cblxuICAgIGZldGNoRmVlZHMoKXtcbiAgICAgICAgbGV0IHJlc3AgOiBhbnk7XG5cbiAgICAgICAgdGhpcy5mZWVkcy5mZXRjaEZlZWRzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHIpID0+e1xuICAgICAgICAgICAgICAgIHJlc3AgPSByO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcik9PntcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzcDtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmVlZERldGFpbHMoZmVlZDphbnkpe1xuICAgICAgICBjb25zb2xlLmxvZygnZmVlZHNkZXRhaWxzICcsZmVlZCk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydmZWVkc2RldGFpbHMvJytmZWVkLmlkXSwge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==