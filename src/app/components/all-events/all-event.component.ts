import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../services/event.service';
import { MatDialog } from '@angular/material';
import { AddEventComponent } from '../addEvent/addEvent.component';
import { EditEventComponent } from '../editEvent/editEvent.component';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-all-event',
  templateUrl: './all-event.component.html',
  styleUrls: ['./all-event.component.css']
})

export class AllEventComponent implements OnInit {
 
  public displayedColumns = ['name', 'startdate','starthour' ,'endhour', 'decription',  'action'];
  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private eventService: EventService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit() {

    this.eventService.getData().subscribe(events => {
    this.dataSource.data = events['hydra:member'];
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    });
   
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AddEventComponent, {
      width: '500px',
      data :  ''
    });
    dialogRef
      .afterClosed()
      .subscribe(result => {
        this.eventService
          .getData()
          .subscribe(events => {
            this.dataSource.data = events["hydra:member"]
            this.dataSource.paginator = this.paginator;
          })
      });
  }

  openDialogEdit(id: string): void {
    const dialogRef = this.dialog.open(EditEventComponent, {
      width: '500px',
      data :  id,
    });
    dialogRef
    .afterClosed()
    .subscribe(result => {
      this.eventService
        .getData()
        .subscribe(rapports => {
          this.dataSource.data = rapports['hydra:member']
          this.dataSource.paginator = this.paginator;
        })
    });
  }

}
