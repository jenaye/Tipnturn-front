export class Task {
    public label: string;
    public title: string;
    public deadline: string;
    public comment: string;
    public users: string;
    public state: string;
    public id: number;

    constructor(){
        this.label = "";
        this.title = "";
        this.deadline= "";
        this.comment= "";
        this.users= "";
        this.state= "";
        this.id =0;

    }
    public setState(newState : string){
        this.state = newState;
    }
}