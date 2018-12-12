"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var oauth_service_1 = require("~/app/shared/service/oauth.service");
var http_1 = require("@angular/common/http");
var LandingComponent = /** @class */ (function () {
    function LandingComponent(router, oauthService, http) {
        this.router = router;
        this.oauthService = oauthService;
        this.http = http;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.navigate = function (link) {
        this.router.navigate([link], {
            animated: true
        });
    };
    LandingComponent.prototype.validateLoginUsing = function (typeName, typeId) {
        var _this = this;
        this.oauthService
            .tnsOauthLogin("facebook")
            .then(function (result) {
            console.log(" result " + result);
            console.log("back to app component with token " + result.accessToken);
            _this.getUserFacebookProfile(result.accessToken);
        });
    };
    LandingComponent.prototype.getUserFacebookProfile = function (accessToken) {
        var _this = this;
        var fields = ['id', 'email', 'first_name', 'last_name', 'link', 'name', 'picture.type(small)'];
        var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',');
        var resp;
        this.http.get(graphApiUrl + '&access_token=' + accessToken + '').subscribe(function (r) {
            resp = r;
        }, function (error) {
        }, function () {
            console.log(resp);
            _this.getFaceBookFriends(resp['id'], accessToken);
        });
    };
    LandingComponent.prototype.getFaceBookFriends = function (userId, accessToken) {
        var fields = ['id'];
        var graphApiUrl = 'https://graph.facebook.com/me/friends/?access_token=' + accessToken + '&';
        // var graphApiUrl = 'https://graph.facebook.com/v3.2/'+userId+'/friends?fields=' + fields.join(',');
        //graphApiUrl = graphApiUrl+'&access_token='+accessToken+'';
        console.log(graphApiUrl);
        var resp;
        this.http.get(graphApiUrl).subscribe(function (r) {
            resp = r;
        }, function (error) {
        }, function () {
            console.log(resp);
        });
    };
    LandingComponent = __decorate([
        core_1.Component({
            selector: 'landing',
            templateUrl: 'app/pages/landing/landing.component.html'
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, oauth_service_1.OAuthService, http_1.HttpClient])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYW5kaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0Qsb0VBQWtFO0FBR2xFLDZDQUFrRDtBQU1sRDtJQUVJLDBCQUFvQixNQUF3QixFQUFVLFlBQTBCLEVBQVUsSUFBaUI7UUFBdkYsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFNBQUksR0FBSixJQUFJLENBQWE7SUFFM0csQ0FBQztJQUVELG1DQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLElBQVk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6QixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNkNBQWtCLEdBQWxCLFVBQW1CLFFBQWdCLEVBQUUsTUFBYztRQUFuRCxpQkFTQztRQVBHLElBQUksQ0FBQyxZQUFZO2FBQ1osYUFBYSxDQUFDLFVBQVUsQ0FBQzthQUN6QixJQUFJLENBQUMsVUFBQyxNQUE0QjtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0RSxLQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUdELGlEQUFzQixHQUF0QixVQUF1QixXQUFrQjtRQUF6QyxpQkFnQkM7UUFmRyxJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDOUYsSUFBSSxXQUFXLEdBQUcsNENBQTRDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsRixJQUFJLElBQVUsQ0FBQztRQUVmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBQyxnQkFBZ0IsR0FBQyxXQUFXLEdBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQztZQUNuRSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxFQUNELFVBQUMsS0FBSztRQUVOLENBQUMsRUFDRDtZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw2Q0FBa0IsR0FBbEIsVUFBbUIsTUFBYyxFQUFFLFdBQW1CO1FBRWxELElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsSUFBSSxXQUFXLEdBQUcsc0RBQXNELEdBQUMsV0FBVyxHQUFDLEdBQUcsQ0FBQztRQUMxRixxR0FBcUc7UUFDcEcsNERBQTREO1FBRTVELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSSxJQUFVLENBQUM7UUFFZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDO1lBQ25DLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixDQUFDLEVBQ0QsVUFBQyxLQUFLO1FBRU4sQ0FBQyxFQUNEO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFqRVEsZ0JBQWdCO1FBSjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsMENBQTBDO1NBQzFELENBQUM7eUNBRzhCLHlCQUFnQixFQUF3Qiw0QkFBWSxFQUFpQixpQkFBVTtPQUZsRyxnQkFBZ0IsQ0FrRTVCO0lBQUQsdUJBQUM7Q0FBQSxBQWxFRCxJQWtFQztBQWxFWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NoYXJlZC9zZXJ2aWNlL29hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IElUbnNPQXV0aFRva2VuUmVzdWx0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1vYXV0aDJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xhbmRpbmcnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBvYXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSwgcHJpdmF0ZSBodHRwIDogSHR0cENsaWVudCkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZShsaW5rOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2xpbmtdLCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZUxvZ2luVXNpbmcodHlwZU5hbWU6IHN0cmluZywgdHlwZUlkOiBudW1iZXIpIHtcblxuICAgICAgICB0aGlzLm9hdXRoU2VydmljZVxuICAgICAgICAgICAgLnRuc09hdXRoTG9naW4oXCJmYWNlYm9va1wiKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdDogSVRuc09BdXRoVG9rZW5SZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiByZXN1bHQgXCIgKyByZXN1bHQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFjayB0byBhcHAgY29tcG9uZW50IHdpdGggdG9rZW4gXCIgKyByZXN1bHQuYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VXNlckZhY2Vib29rUHJvZmlsZShyZXN1bHQuYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgXG4gICAgZ2V0VXNlckZhY2Vib29rUHJvZmlsZShhY2Nlc3NUb2tlbjpzdHJpbmcpe1xuICAgICAgICB2YXIgZmllbGRzID0gWydpZCcsICdlbWFpbCcsICdmaXJzdF9uYW1lJywgJ2xhc3RfbmFtZScsICdsaW5rJywgJ25hbWUnLCdwaWN0dXJlLnR5cGUoc21hbGwpJ107XG4gICAgICAgIHZhciBncmFwaEFwaVVybCA9ICdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS92Mi41L21lP2ZpZWxkcz0nICsgZmllbGRzLmpvaW4oJywnKTtcblxuICAgICAgICBsZXQgcmVzcCA6IGFueTtcblxuICAgICAgICB0aGlzLmh0dHAuZ2V0KGdyYXBoQXBpVXJsKycmYWNjZXNzX3Rva2VuPScrYWNjZXNzVG9rZW4rJycpLnN1YnNjcmliZSgocikgPT57XG4gICAgICAgICAgICByZXNwID0gcjtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKT0+e1xuXG4gICAgICAgIH0sXG4gICAgICAgICgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RmFjZUJvb2tGcmllbmRzKHJlc3BbJ2lkJ10sYWNjZXNzVG9rZW4pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldEZhY2VCb29rRnJpZW5kcyh1c2VySWQ6IHN0cmluZywgYWNjZXNzVG9rZW46IHN0cmluZyl7XG5cbiAgICAgICAgdmFyIGZpZWxkcyA9IFsnaWQnXTtcbiAgICAgICAgdmFyIGdyYXBoQXBpVXJsID0gJ2h0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tL21lL2ZyaWVuZHMvP2FjY2Vzc190b2tlbj0nK2FjY2Vzc1Rva2VuKycmJztcbiAgICAgICAvLyB2YXIgZ3JhcGhBcGlVcmwgPSAnaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vdjMuMi8nK3VzZXJJZCsnL2ZyaWVuZHM/ZmllbGRzPScgKyBmaWVsZHMuam9pbignLCcpO1xuICAgICAgICAvL2dyYXBoQXBpVXJsID0gZ3JhcGhBcGlVcmwrJyZhY2Nlc3NfdG9rZW49JythY2Nlc3NUb2tlbisnJztcblxuICAgICAgICBjb25zb2xlLmxvZyhncmFwaEFwaVVybCk7XG4gICAgICAgIGxldCByZXNwIDogYW55O1xuXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoZ3JhcGhBcGlVcmwpLnN1YnNjcmliZSgocikgPT57XG4gICAgICAgICAgICByZXNwID0gcjtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKT0+e1xuXG4gICAgICAgIH0sXG4gICAgICAgICgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgICAgfSlcbiAgICB9XG59Il19