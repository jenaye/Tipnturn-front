export class Task {
    public name: string;
    public title: string;
    public deadline: string;
    public comment: string;
    public users: string;
    public state: string;

    constructor(){
        this.name = "";
        this.title= "";
        this.deadline= "";
        this.comment ="";
        this.users="";
        this.state="todo";

    }
    public setState(newState : string){
        this.state = newState;
    }
}