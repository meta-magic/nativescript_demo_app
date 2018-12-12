
export class HumanValuesModel {

    private id: string;
    private name : string;

    constructor(id: string, name: string){
        this.id = id;
        this.name = name;
    }

    toString(){
        return this.name;
    }
}