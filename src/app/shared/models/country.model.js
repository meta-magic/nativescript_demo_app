"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CountryModel = /** @class */ (function () {
    function CountryModel(countryIsd, countryCode, countryName) {
        this.countryCode = countryCode;
        this.countryIsd = countryIsd;
        this.countryName = countryName;
    }
    CountryModel.prototype.toString = function () {
        return "+" + this.countryIsd + " (" + this.countryName + ")";
    };
    return CountryModel;
}());
exports.CountryModel = CountryModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvdW50cnkubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUtJLHNCQUFZLFVBQWtCLEVBQUcsV0FBbUIsRUFBRSxXQUFrQjtRQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLE9BQU8sR0FBRyxHQUFDLElBQUksQ0FBQyxVQUFVLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxXQUFXLEdBQUMsR0FBRyxDQUFDO0lBQ3pELENBQUM7SUFFTCxtQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ291bnRyeU1vZGVsIHtcbiAgICBjb3VudHJ5SXNkIDogc3RyaW5nO1xuICAgIGNvdW50cnlDb2RlIDogc3RyaW5nO1xuICAgIGNvdW50cnlOYW1lIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY291bnRyeUlzZDogc3RyaW5nLCAgY291bnRyeUNvZGU6IHN0cmluZywgY291bnRyeU5hbWU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5jb3VudHJ5Q29kZSA9IGNvdW50cnlDb2RlO1xuICAgICAgICB0aGlzLmNvdW50cnlJc2QgPSBjb3VudHJ5SXNkO1xuICAgICAgICB0aGlzLmNvdW50cnlOYW1lID0gY291bnRyeU5hbWU7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKXtcbiAgICAgICAgcmV0dXJuIFwiK1wiK3RoaXMuY291bnRyeUlzZCtcIiAoXCIrdGhpcy5jb3VudHJ5TmFtZStcIilcIjtcbiAgICB9XG5cbn0iXX0=