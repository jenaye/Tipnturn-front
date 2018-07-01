import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FinancialService} from '../../services/financial.service';
import {AddFinancialComponent} from '../addFinancial/addFinancial.component';
import { saveAs } from 'file-saver';
import {CsvService} from "../../services/csv.service";

@Component({selector: 'app-bilan', templateUrl: './financial.component.html', styleUrls: ['./financial.component.css']})
export class FinancialComponent implements OnInit {

  public rapports = [];
  displayedColumns = ['date', 'libelle', 'sortie', 'rentree'];
  dataSource: MatTableDataSource < any >;

  @ViewChild(MatPaginator)paginator: MatPaginator;

  constructor(
      private bilanService: FinancialService,
      public dialog: MatDialog,
      private csvservice: CsvService
  )
  {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this
      .bilanService
      .getData()
      .subscribe(rapports => {
        this.dataSource.data = rapports['hydra:member']
        this.dataSource.paginator = this.paginator;
      })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

    downloadFile(data: any){
        var blob = new Blob([data], { type: 'text/csv' });
        var url= window.URL.createObjectURL(blob);
        window.open(url);
    }



    results(){
        this.csvservice.downloadAsCsv().subscribe( thune => {
            let parsedResponse = thune.text();
            this.downloadFile(parsedResponse);
            let blob = new Blob([parsedResponse], { type: 'text/csv' });
            saveAs(blob, "bilan.csv");
        })
    }

  openDialogAdd(): void {
    let dialogRef = this
      .dialog
      .open(AddFinancialComponent, {width: '500px'});
    dialogRef
      .afterClosed()
      .subscribe(result => {
        this.bilanService
          .getData()
          .subscribe(rapports => {
            this.dataSource.data = rapports['hydra:member'];
            this.dataSource.paginator = this.paginator;
          })
      });
  }

}
