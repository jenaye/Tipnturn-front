import { Component, OnInit } from '@angular/core';
import { ListingmembreService } from '../../services/listingmembre.service';
import { ActivitiesService } from '../../services/activities.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AjoutmembreComponent } from '../ajoutmembre/ajoutmembre.component';
import { EditmembreComponent } from '../editmembre/editmembre.component';

@Component({
  selector: 'app-listes-membres',
  templateUrl: './listes-membres.component.html',
  styleUrls: ['./listes-membres.component.css']
})
export class ListesMembresComponent implements OnInit {
  public membres = [];
  public activities = [];
  public prenom: any;
  public res: any;
  constructor(private listemembre: ListingmembreService, private activiteService: ActivitiesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.listemembre.getData().subscribe(membres => {
      this.membres = membres;

    })

    this.activiteService.getData().subscribe(activities => {
      this.activities = activities;

    })
  }

  openDialogAdd(): void {
    let dialogRef = this.dialog.open(AjoutmembreComponent, {
      width: '500px',
      data :  this.activities
    });

    dialogRef.afterClosed().subscribe(result => {
     
    });
  }
  openDialogEdit(id : string): void {
    let dialogRef = this.dialog.open(EditmembreComponent, {
      width: '500px',
      data :  id,
    });

    dialogRef.afterClosed().subscribe(result => {
     
    });
  }
  hasActivity(idActivite, membre){
    let activites = membre.activites
    activites = activites.filter( (activite) => activite.id === idActivite)
    return activites.length > 0
  }

    search() {
        var prenom = this.prenom;
        this.listemembre.getDataByName(prenom).subscribe(el => {
            this.membres = el;
        })
    }

}
