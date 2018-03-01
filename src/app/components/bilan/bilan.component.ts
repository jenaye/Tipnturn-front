import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {  BilanService } from '../../services/bilan.service';
import { AjoutbilanComponent } from '../ajoutbilan/ajoutbilan.component';

@Component({
  selector: 'app-bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.css']
})
export class BilanComponent implements OnInit {
  
  public rapports = [];
  displayedColumns = ['date', 'libelle', 'sortie', 'rentree'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private bilanService:BilanService ,public dialog: MatDialog) {
    this.dataSource= new MatTableDataSource();
   }

    ngOnInit() {
      
        this.bilanService.getData().subscribe(rapports => {
            this.dataSource.data = rapports
            this.dataSource.paginator = this.paginator;
        })
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
      }

      applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
      }

      openDialogAdd(): void {
        let dialogRef = this.dialog.open(AjoutbilanComponent, {
          width: '500px',
          
        });
      }
    

}
