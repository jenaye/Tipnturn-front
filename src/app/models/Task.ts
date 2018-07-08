import { Tag } from '../models/Tag';

export class Task {
    public tags: Array<Tag>;
    public title: string;
    public deadline: string;
    public comment: string;
    public user: string;
    public state: string;
    public id: number;

    constructor(taskTitle : string , taskState : string,taskId?:number, taskTag? : Array<Tag> , taskDeadLine?:string, taskComment?:string,taskUser?:string){
        this.title = taskTitle;
        this.state= taskState;
        if(taskId){this.id=taskId}
        if(taskTag){this.tags = taskTag}else{this.tags = new Array()}
        if(taskDeadLine){this.deadline=taskDeadLine}
        if(taskComment){ this.comment= taskComment}
        if(taskUser && taskUser.trim()!==''){this.user= taskUser}
    }

 
    public setState(newState : string){
        this.state = newState;
    }
}