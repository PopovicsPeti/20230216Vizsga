export class Plushie{
    private name: string;
    private szize: number;

    constructor(name: string, szize: number){
        this.name = name;
        this.szize = szize;
    }

    toString(){
        return `<b> ${this.name} ( ${this.szize} )</b>`;
    }
}