import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
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
  public nbTask : number;
  
  constructor(private taskService : TaskService, private dragulaService: DragulaService) {    
     this.todo = new Array();
     this.doing = new Array();
     this.done = new Array();
     this.allTask = new Array();
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
   }

  ngOnInit() {
    this.taskService.getAllTasks().subscribe(res=>{
      this.allTask = res['hydra:member'];
      this.initDoing();
      this.initDone();
      this.initTodo();
      this.nbTask = this.todo.length + this.doing.length +this.done.length;
    })
  }

  initTodo(){
    this.todo = this.allTask.filter(task => { task.state === "todo"})
  }
  initDoing(){
    this.doing = this.allTask.filter(task => { task.state === "doing"})
  }
  initDone(){
    this.done = this.allTask.filter(task => { task.state === "done"})
  }

  addTodoTask(){
    let task = new Task()
    this.nbTask ++
    task.name = "Nouvelle tache " + this.nbTask
    this.todo.unshift(task);
  }
  addDoingTask(){
    let task = new Task()
    this.nbTask ++
    task.name = "Nouvelle tache " + this.nbTask
    this.doing.unshift(new Task());
  }
  addDoneTask(){
    let task = new Task()
    this.nbTask ++
    task.name = "Nouvelle tache " + this.nbTask
    this.done.unshift(new Task());
  }

  getTask(table : string,taskName : string): Task{
    let task = new Task();
    switch(table){
      case 'todo' :  task = this.todo.find(el =>  el.name === taskName);
      break; 
      case 'doing':task = this.doing.find(el =>  el.name === taskName)
      break;
      case 'done':task = this.done.find(el =>  el.name === taskName)
      break;
    };
    return task;
  }

  private onDrag(args) {
    let [e, el] = args;
    // do something
  }
  
  
  private onOver(args) {
    let [e, el, container] = args;
    // do something
  }
  
  private onOut(args) {
    let [e, el, container] = args;
    // do something
  }
  private onDropModel(args) {
    let [el, target, source] = args;
    console.log(el)
    this.getTask(target.id,el.id).setState(target.id)
    console.log(this.getTask(target.id,el.id));
    
  }

}
