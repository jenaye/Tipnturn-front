import { Component, OnInit, Input } from '@angular/core';
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
    this.taskService.updateTask(this.task).subscribe(res =>{
      this.snackBar.saveSuccess();
    })
  }

  openDialogEdit(): void {
    const dialogRef = this.dialog.open(TaskOptionComponent, {
      width: '500px',
      data :  this.task
    });
    dialogRef.afterClosed().subscribe(result => {
        
          });
      }
      
  deleteTask(){
    
  }
  

}
