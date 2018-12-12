export class ListPickerModal <T>{
    
    items : T [];

    submitText : string;

    constructor (items: T[], submitText: string){
        this.items = items;
        if(submitText !=null)
            this.submitText = submitText;
        else
            this.submitText = "Submit";
    }
    
}