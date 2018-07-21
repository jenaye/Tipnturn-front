import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { AddActivitesComponent } from '../../components/addActivites/addActivites.component';
import { EditActivitesComponent } from '../../components/edit-activites/edit-activites.component'
import { MatDialog } from '@angular/material';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-all-activities',
  templateUrl: './all-activities.component.html',
  styleUrls: ['./all-activities.component.css']
})
export class AllActivitiesComponent implements OnInit {

  public activities = [];
  public displayedColumns = ['name', 'type', 'prix', 'action'];
  public dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private activitesService: ActivitiesService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.loadTable()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    this.dataSource.filter = filterValue;
  }


  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AddActivitesComponent, {
      width: '500px',
      data: ''
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadTable();
    });
  }

  openDialogEdit(id: string): void {
    const dialogRef = this.dialog.open(EditActivitesComponent, {
      width: '500px',
      data :  id,
    });
    dialogRef
    .afterClosed()
    .subscribe(() => {
     this.loadTable();
    });
  }

  deleteActivites(id: string): void {
    this.activitesService.delete(id).subscribe(res => {
      this.loadTable();
    });
  };


  loadTable(): void {
    this.activities= [];
    this.activitesService.getData()
      .subscribe(events => {
        events['hydra:member'].forEach(el => {
          this.activities.push({ name: el['name'], type: el['type']['name'], prix: el['type']['price'], id: el['id'] })
        });
        
        this.dataSource.data = this.activities;
        this.dataSource.paginator = this.paginator;
      });
  }
}
