import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material'
import { TaskOptionComponent } from '../task-option/task-option.component'
import { TaskService } from '../../services/task.service';
import { SnackBarService } from '../../services/snackBar.service'
import { Task } from '../../models/Task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task : Task;
  @Output() deletedId : EventEmitter<number> = new EventEmitter<number>();
  public isHoover : boolean;
  public editing : boolean;
 
  constructor(private taskService : TaskService, private snackBar : SnackBarService, public dialog: MatDialog) {
    this.isHoover = false;
    this.editing = false;
   }

  ngOnInit() {
  }
  
  saveChanges(){
    this.editing = false;
    this.snackBar.saveSuccess();
  }

  openDialogEdit(): void {
    const dialogRef = this.dialog.open(TaskOptionComponent, {
      width: '500px',
      data :  this.task
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
     
    });
      }
      
  deleteTask(){
    this.taskService.deleteTask(this.task.id).subscribe(res=>{
      this.deletedId.emit(this.task.id);
    });
  }
  

}
