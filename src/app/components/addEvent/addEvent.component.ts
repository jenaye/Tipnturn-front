import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {EventService} from '../../services/event.service';
import { MapService } from '../../services/map.service'




@Component({selector: 'app-addEvent', templateUrl: './addEvent.component.html', styleUrls: ['./addEvent.component.css']})
export class AddEventComponent implements OnInit {


    public formEvent :FormGroup; 
   

    constructor(private formBuilder: FormBuilder, private eventsService: EventService,
         public dialogRef: MatDialogRef < AddEventComponent >, private ms:MapService) {
        this.formEvent = this.formBuilder.group({
          startDate: ['', Validators.required],
          startHour:['', Validators.required],
          endDate: [, Validators.required],
          endHour: ['',Validators.required],
          name: ['' ,Validators.required],
          numStreet:'',
          nameStreet:'',
          city: ['', Validators.required],
          description: ['', Validators.required],
        
        });            
    }

    ngOnInit() {
      
      }
      
    

    add() {
       

        const data= this.formEvent.value.numStreet+'+'+this.formEvent.value.nameStreet+'+'+this.formEvent.value.city
       
        this.ms.getData(data).subscribe(result=>{
            console.log(result)
        })

        // this.eventsService
        //     .insert(event)
        //     .subscribe(result => {
        //        this.closeDialog();
        //     });

    }

    closeDialog() {
        this.dialogRef.close();
      }
  

    
   

}
