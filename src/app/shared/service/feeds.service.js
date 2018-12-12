"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var FeedsService = /** @class */ (function () {
    function FeedsService(http) {
        this.http = http;
    }
    FeedsService.prototype.fetchFeeds = function () {
        return this.http.get("https://jsonplaceholder.typicode.com/posts");
    };
    FeedsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FeedsService);
    return FeedsService;
}());
exports.FeedsService = FeedsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZlZWRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWtEO0FBR2xEO0lBRUksc0JBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFFckMsQ0FBQztJQUVELGlDQUFVLEdBQVY7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQVJRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FHa0IsaUJBQVU7T0FGNUIsWUFBWSxDQVN4QjtJQUFELG1CQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZlZWRzU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHAgOiBIdHRwQ2xpZW50KXtcblxuICAgIH1cblxuICAgIGZldGNoRmVlZHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIik7XG4gICAgfVxufSJdfQ==