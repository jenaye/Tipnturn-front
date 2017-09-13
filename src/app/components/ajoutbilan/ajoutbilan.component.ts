import { Component, OnInit } from '@angular/core';
import {BilanService} from '../../services/bilan.service'

@Component({
  selector: 'app-ajoutbilan',
  templateUrl: './ajoutbilan.component.html',
  styleUrls: ['./ajoutbilan.component.css']
})
export class AjoutbilanComponent implements OnInit {

    private date:any;
    private libelle:string;
    private rentree:any;
    private sortie:any;
    private Bilan = [];
    
  constructor(private bilanService: BilanService) { }

  ngOnInit(){
    
  }

    add() {

        let data = {
            date: this.date,
            libelle: this.libelle,
            rentree:this.rentree?this.rentree:null,
            sortie:this.sortie?this.sortie:null,
        };

        this.bilanService.insert(data).subscribe( membre => {
        
        });

    }

}
