import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersService } from '../../services/users.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-task-option',
  templateUrl: './task-option.component.html',
  styleUrls: ['./task-option.component.css']
})
export class TaskOptionComponent implements OnInit {

  public formTask: FormGroup;
  public tabUser : Array<any>;
  public dataLoaded : boolean
  public filteredUser : Observable<any[]>;
  public today : Date;

  constructor(private formBuilder: FormBuilder, private  usersService: UsersService, public dialogRef: MatDialogRef < TaskOptionComponent >,@Inject(MAT_DIALOG_DATA)public data : any) {
    this.formTask = this.formBuilder.group({
      title: [ [data.title], Validators.required],
      label: [ data.label],
      deadline: [data.deadline],
      comment: [data.comment],
      users: [data.users],
    });  
    this.today = new Date();
    this.dataLoaded = false;          
   }
  
  ngOnInit() {
    this.usersService.findAll().subscribe( res => {
      this.tabUser = res['hydra:member'];
      this.filteredUser = this.formTask.controls.users.valueChanges.pipe(
        startWith(''), map(user => user ? this.filterUser(user) : this.tabUser.slice())
      );
      this.dataLoaded = true;
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }

  filterUser(name: any) {
    return this.tabUser.filter(user => user.username.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

}
