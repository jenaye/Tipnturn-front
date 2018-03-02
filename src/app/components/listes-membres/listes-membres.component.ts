import { Component, OnInit,ViewChild } from '@angular/core';
import { ListingmembreService } from '../../services/listingmembre.service';
import { ActivitiesService } from '../../services/activities.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AjoutmembreComponent } from '../ajoutmembre/ajoutmembre.component';
import { EditmembreComponent } from '../editmembre/editmembre.component';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-listes-membres',
  templateUrl: './listes-membres.component.html',
  styleUrls: ['./listes-membres.component.css']
})
export class ListesMembresComponent implements OnInit {

 
  public activities = [];
  public prenom: any;
  public res: any;
  displayedColumns = ['nom', 'prenom', 'email', 'phone', 'cotisation','cheque','certificat', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private listemembre: ListingmembreService, private activiteService: ActivitiesService, public dialog: MatDialog) {
    this.dataSource= new MatTableDataSource();
   }

  ngOnInit() {
    
    this.listemembre.getData().subscribe(membres => {
    this.dataSource.data = membres
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
     
    })
    this.activiteService.getData().subscribe(activities => {
      this.activities = activities;

    })
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialogAdd(): void {
    let dialogRef = this.dialog.open(AjoutmembreComponent, {
      width: '500px',
      data :  this.activities
    });
  }
 
  openDialogEdit(id : string): void {
    let dialogRef = this.dialog.open(EditmembreComponent, {
      width: '500px',
      data :  id,
    });
  }
  
}
