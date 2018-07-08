import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersService } from '../../services/users.service';
import { TaskService } from '../../services/task.service';
import { Tag } from '../../models/Tag'
import { Observable } from 'rxjs';
import { map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-task-option',
  templateUrl: './task-option.component.html',
  styleUrls: ['./task-option.component.css']
})
export class TaskOptionComponent implements OnInit {

  public formTask: FormGroup;
  public tabUser : Array<any>;
  public dataLoaded : boolean;
  public tags : Array<Tag>;
  public filteredUser : Observable<any[]>;
  public today : Date;

  constructor(private formBuilder: FormBuilder, private  usersService: UsersService,private taskService: TaskService, public dialogRef: MatDialogRef < TaskOptionComponent >,@Inject(MAT_DIALOG_DATA)public data : any) {
    
    this.formTask = this.formBuilder.group({
      title: [ data.title],
      deadline: [data.deadline],
      comment: [data.comment],
      user: [data.user],
    });  
    this.today = new Date();
    this.tags = new Array();
    this.dataLoaded = false;          
   }
  
  ngOnInit() {
    this.initSelectUser();
    this.initTags();
  }

  initTags(){
    this.data.tags.forEach(element => {
      this.tags.push(new Tag(element['id'],element['name'],element['color']))
    });
  }

  initSelectUser(){
    this.usersService.findAll().subscribe( res => {
      this.tabUser = res['hydra:member'];
      this.filteredUser = this.formTask.controls.user.valueChanges.pipe(
        startWith(''), map(user => user ? this.filterUser(user) : this.tabUser.slice())
      );
      this.dataLoaded = true;
    })
  }

  closeDialog(result?:any) {
    if(result){
      this.dialogRef.close(result);
    }
    this.dialogRef.close();
  }

  filterUser(name: any) {
    return this.tabUser.filter(user => user.username.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  tagsChange(event :any){
   this.tags = event;
  }

  saveTask(){

    let dataToSend

    if(this.formTask.value.deadline){
      dataToSend = {
        "title": this.formTask.value.title,
        "deadline": new Date(this.formTask.value.deadline),
        "comment":this.formTask.value.comment,
        "tags": this.tags,
        "user": this.formTask.value.user,
        "state": this.data.state
      };
    }else{
      dataToSend = {
        "title": this.formTask.value.title,
        "comment":this.formTask.value.comment,
        "tags": this.tags,
        "user": this.formTask.value.user,
        "state": this.data.state
      };
    }

    
    this.taskService.updateTask(this.data.id, dataToSend).subscribe(res=>{
      this.closeDialog(res);
    });
  }

}
