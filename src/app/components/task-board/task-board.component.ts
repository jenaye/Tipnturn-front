import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { SnackBarService } from '../../services/snackBar.service'
import { DragulaService } from 'ng2-dragula';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {
  
  public todo : Array<Task>;
  public doing : Array<Task>;
  public done : Array<Task>;
  public allTask :Array<Task>;
  public allTaskApi : Array<any>
  public nbTask : number;
  
  constructor(private taskService : TaskService, private dragulaService: DragulaService, private snackBar : SnackBarService ) {    
     this.todo = new Array();
     this.doing = new Array();
     this.done = new Array();
     this.allTask = new Array();
     this.allTaskApi = new Array();

    
    this.dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
  
   }

  ngOnInit() {
    this.taskService.getAllTasks().subscribe(res=>{
      this.allTaskApi = res['hydra:member'];
      this.initColumns();
      this.initDoing();
      this.initDone();
      this.initTodo();
      this.nbTask = this.todo.length + this.doing.length +this.done.length;
      
    })
  }

  initColumns(){
    this.allTaskApi.forEach(el=>{
      this.allTask.push(new Task(el['title'],el['state'],el['id'],el['tags'],el['deadline'],el['comment'],el['user']))
    });
  }

  initTodo(){
    this.todo = this.allTask.filter(task =>  task.state === "todo")
  }
  initDoing(){
    this.doing = this.allTask.filter(task =>  task.state === "doing")
  }
  initDone(){
    this.done = this.allTask.filter(task =>  task.state === "done")
  }

  addTodoTask(){
    let task = new Task("Nouvelle tache " + this.nbTask,"todo")
    this.nbTask ++
      this.taskService.newTask(task).subscribe(res =>{
      task.id = res['id'];
      this.snackBar.creationSuccess();
      this.todo.unshift(task);
      });
  }

  addDoingTask(){
    let task = new Task("Nouvelle tache " + this.nbTask,"doing")
    this.nbTask ++
    this.taskService.newTask(task).subscribe(res =>{
        this.snackBar.creationSuccess();
        this.doing.unshift(task);
        });
  }
  addDoneTask(){
    let task = new Task("Nouvelle tache " + this.nbTask,"done")
    this.nbTask ++
    this.taskService.newTask(task).subscribe(res =>{
      this.snackBar.creationSuccess();
      this.done.unshift(task);
      });
  }

  getTask(table : string,taskTitle : string): Task{
    return this[`${table}`].find(el =>  el.title === taskTitle)
  }

  private onDropModel(args) {
    let [el, target, source] = args;
    let currentTask = this.getTask(target.id,el.id);
    currentTask['state'] = target.id
    this.taskService.updateTask(currentTask['id']  ,currentTask).subscribe(res =>{
     
     });

  }
  refreshAfterDelete(state : string, idToRemove: number){
    this[`${state}`] = this[`${state}`].filter(el =>  el.id !== idToRemove )
  }
}
