import { Component, OnInit } from '@angular/core';
import {  BilanService } from '../../services/bilan.service';

@Component({
  selector: 'app-bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.css']
})
export class BilanComponent implements OnInit {

  public rapports = [];

  constructor( private bilanService:BilanService) { }

    ngOnInit() {
      
        this.bilanService.getData().subscribe(rapports => {
            this.rapports = rapports;
        })
    }

}
