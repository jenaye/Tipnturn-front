import { Tag } from '../models/Tag';
import { User } from '../models/User'

export class Task {
    public tags: Array<Tag>;
    public title: string;
    public deadline: string;
    public comment: string;
    public user: User;
    public state: string;
    public id: number;

    constructor(taskTitle : string , taskState : string,taskId?:number, taskTag? : Array<Tag> , taskDeadLine?:string, taskComment?:string,taskUser?:User){
        this.title = taskTitle;
        this.state= taskState;
        if(taskId){this.id=taskId}
        if(taskTag){this.tags = taskTag}else{this.tags = new Array()}
        if(taskDeadLine){this.deadline=taskDeadLine}
        if(taskComment){ this.comment= taskComment}
        if(taskUser){this.user= taskUser}
    }

 
    public setState(newState : string){
        this.state = newState;
    }
}