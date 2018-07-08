export class Tag {
    public color: string;
    public name: string;
    public id: number;

    constructor(tagId : number, tagText : string, tagColor: string){
        this.color = tagColor;
        this.name = tagText;
        this.id= tagId;
    }
}