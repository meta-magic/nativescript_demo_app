

export class GenderModel {

    private genderId: string;
    private generName : string;

    constructor(genderId: string, genderName: string){
        this.genderId = genderId;
        this.generName = genderName;
    }

    toString(){
        return this.generName;
    }
}