export class CountryModel {
    countryIsd : string;
    countryCode : string;
    countryName : string;

    constructor(countryIsd: string,  countryCode: string, countryName:string){
        this.countryCode = countryCode;
        this.countryIsd = countryIsd;
        this.countryName = countryName;
    }

    toString(){
        return "+"+this.countryIsd+" ("+this.countryName+")";
    }

}