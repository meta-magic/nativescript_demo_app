"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.authenticate = function (login) {
        console.log('User Service ', login);
        return true;
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClientModule])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUF3RDtBQUd4RDtJQUVJLHFCQUFvQixJQUFzQjtRQUF0QixTQUFJLEdBQUosSUFBSSxDQUFrQjtJQUcxQyxDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQWdCO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFWUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBR2lCLHVCQUFnQjtPQUZqQyxXQUFXLENBV3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTG9naW5Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvbG9naW4ubW9kZWxcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudE1vZHVsZSlcbiAgICB7XG5cbiAgICB9XG5cbiAgICBhdXRoZW50aWNhdGUobG9naW46TG9naW5Nb2RlbCkgOiBib29sZWFue1xuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBTZXJ2aWNlICcsbG9naW4pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59Il19