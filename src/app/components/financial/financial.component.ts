import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import {FinancialService} from '../../services/financial.service';
import {AddFinancialComponent} from '../addFinancial/addFinancial.component';

@Component({selector: 'app-bilan', templateUrl: './financial.component.html', styleUrls: ['./financial.component.css']})
export class FinancialComponent implements OnInit {

  public rapports = [];
  displayedColumns = ['date', 'libelle', 'sortie', 'rentree'];
  dataSource: MatTableDataSource < any >;

  @ViewChild(MatPaginator)paginator: MatPaginator;

  constructor(private bilanService: FinancialService, public dialog: MatDialog)
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
            this.dataSource.data = rapports['hydra:member']
            this.dataSource.paginator = this.paginator;
          })
      });
  }

}
