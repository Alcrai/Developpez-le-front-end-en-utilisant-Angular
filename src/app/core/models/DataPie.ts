export class DataPie {
    name:string;
    y:number;
    url:string;

    constructor(name:string,y:number,url:string){
        this.name=name;
        this.y=y;
        this.url=url;
    }

    toString(): string {
        return "{name:\""+this.name+"\", y:"+this.y+"\", url:"+this.url+"}";
    }

}