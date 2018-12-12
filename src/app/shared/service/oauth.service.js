"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_oauth2_1 = require("nativescript-oauth2");
var OAuthService = /** @class */ (function () {
    function OAuthService() {
        this.client = null;
    }
    OAuthService.prototype.tnsOauthLogin = function (providerType) {
        var _this = this;
        this.client = new nativescript_oauth2_1.TnsOAuthClient(providerType);
        return new Promise(function (resolve, reject) {
            _this.client.loginWithCompletion(function (tokenResult, error) {
                if (error) {
                    console.error("back to main page with error: ");
                    console.error(error);
                    reject(error);
                }
                else {
                    console.log("back to main page with access token: ");
                    console.log(tokenResult);
                    resolve(tokenResult);
                }
            });
        });
    };
    OAuthService.prototype.tnsOauthLogout = function () {
        if (this.client) {
            this.client.logout();
        }
    };
    OAuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], OAuthService);
    return OAuthService;
}());
exports.OAuthService = OAuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsMkRBRzZCO0FBRzdCO0lBR0k7UUFGUSxXQUFNLEdBQW1CLElBQUksQ0FBQztJQUV0QixDQUFDO0lBRVYsb0NBQWEsR0FBcEIsVUFBcUIsWUFBWTtRQUFqQyxpQkFrQkM7UUFqQkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLG9DQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFL0MsT0FBTyxJQUFJLE9BQU8sQ0FBdUIsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNyRCxLQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUMzQixVQUFDLFdBQWlDLEVBQUUsS0FBSztnQkFDckMsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO29CQUNoRCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztvQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDekIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUN4QjtZQUNMLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0scUNBQWMsR0FBckI7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQTdCUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7O09BQ0EsWUFBWSxDQThCeEI7SUFBRCxtQkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7XG4gICAgVG5zT0F1dGhDbGllbnQsXG4gICAgSVRuc09BdXRoVG9rZW5SZXN1bHRcbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1vYXV0aDJcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9BdXRoU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjbGllbnQ6IFRuc09BdXRoQ2xpZW50ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBwdWJsaWMgdG5zT2F1dGhMb2dpbihwcm92aWRlclR5cGUpOiBQcm9taXNlPElUbnNPQXV0aFRva2VuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gbmV3IFRuc09BdXRoQ2xpZW50KHByb3ZpZGVyVHlwZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPElUbnNPQXV0aFRva2VuUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudC5sb2dpbldpdGhDb21wbGV0aW9uKFxuICAgICAgICAgICAgICAgICh0b2tlblJlc3VsdDogSVRuc09BdXRoVG9rZW5SZXN1bHQsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImJhY2sgdG8gbWFpbiBwYWdlIHdpdGggZXJyb3I6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFjayB0byBtYWluIHBhZ2Ugd2l0aCBhY2Nlc3MgdG9rZW46IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodG9rZW5SZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRuc09hdXRoTG9nb3V0KCkge1xuICAgICAgICBpZiAodGhpcy5jbGllbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LmxvZ291dCgpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==