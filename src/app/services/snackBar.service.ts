import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class SnackBarService {

  constructor(public snackBar: MatSnackBar) { }

  saveSuccess() {
    this.snackBar.open('Les modifications on bien été prises en compte','edit', {
      duration: 500,
    });
  }
  creationSuccess() {
    this.snackBar.open('La tâche à été créer avec succès','edit', {
      duration: 500,
    });
  }

}
