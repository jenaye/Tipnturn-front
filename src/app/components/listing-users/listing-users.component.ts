import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import { MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-listing-users',
  templateUrl: './listing-users.component.html',
  styleUrls: ['./listing-users.component.css']
})
export class ListingUsersComponent implements OnInit {
    dataSource: MatTableDataSource < any >;
    displayedColumns = ['email', 'id'];
    public users = [];
  constructor(private userService: UsersService) {
      this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
      this
          .userService
          .findAll()
          .subscribe(users => {
              console.log("USER =>", users['hydra:member']);
              this.dataSource.data = users['hydra:member'];
          });

      console.log("MHH",this.dataSource)
  }


}
