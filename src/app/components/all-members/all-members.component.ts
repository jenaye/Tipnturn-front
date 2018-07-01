import {Component, OnInit, ViewChild} from '@angular/core';
import {ListingmemberService} from '../../services/listingmember.service';
import {ActivitiesService} from '../../services/activities.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AddMemberComponent} from '../addMember/addMember.component';
import {EditmemberComponent} from '../editmember/editmember.component';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CsvService} from "../../services/csv.service";
import { saveAs } from 'file-saver';

@Component({selector: 'app-all-members', templateUrl: './all-members.component.html', styleUrls: ['./all-members.component.css']})
export class AllMembersComponent implements OnInit {

  public activities = [];
  public prenom : any;
  public res : any;
  displayedColumns = [
    'nom',
    'prenom',
    'email',
    'phone',
    'cotisation',
    'cheque',
    'certificat',
    'action'
  ];
  dataSource : MatTableDataSource < any >;

  @ViewChild(MatPaginator)paginator : MatPaginator;
  @ViewChild(MatSort)sort : MatSort;

  constructor(    private csvservice: CsvService, private listemembre : ListingmemberService, private activiteService : ActivitiesService, public dialog : MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {

    this
      .listemembre
      .getData()
      .subscribe(membres => {
        
        this.dataSource.data =  membres['hydra:member'];
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      });
    this
      .activiteService
      .getData()
      .subscribe(activities => {
        this.activities = activities['hydra:member'];

      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

    downloadFile(data: any){
        var blob = new Blob([data], { type: 'text/csv' });
        var url= window.URL.createObjectURL(blob);
        window.open(url);
    }

    results(){
        this.csvservice.downloadMembersAsCsv().subscribe( members => {
            let parsedResponse = members.text();
            this.downloadFile(parsedResponse);
            let blob = new Blob([parsedResponse], { type: 'text/csv' });
            saveAs(blob, "members.csv");
        })
    }

  applyFilter(filterValue : string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialogAdd() : void {
    const dialogRef = this
      .dialog
      .open(AddMemberComponent, {
        width: '500px',
        data: this.activities
      });
    dialogRef
      .afterClosed()
      .subscribe(result => {
        this
          .listemembre
          .getData()
          .subscribe(rapports => {
            this.dataSource.data = rapports['hydra:member']
            this.dataSource.paginator = this.paginator;
          })
      });
  }

  openDialogEdit(id : string) : void {
    const dialogRef = this
      .dialog
      .open(EditmemberComponent, {
        width: '500px',
        data: id
      });
    dialogRef
      .afterClosed()
      .subscribe(result => {
        this
          .listemembre
          .getData()
          .subscribe(rapports => {
            this.dataSource.data = rapports['hydra:member']
            this.dataSource.paginator = this.paginator;
          })
      });
  }

 

}
