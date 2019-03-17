import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AddIndexComponent } from '../add-index/add-index.component';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})

export class SetupComponent implements OnInit {

  indices: Array<Index> = [];
  searchTerm: string;
  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.indices = JSON.parse(window.localStorage.getItem('indices')) || [];
  }

  ngOnInit() {
  }

  deleteIndex(indexId: string) {
    let indexToBeDeletable = this.indices.findIndex(index => index.id === indexId);
    this.indices.splice(indexToBeDeletable, 1);
    console.log('Index to be deletable', indexToBeDeletable, this.indices);
    window.localStorage.setItem('indices', JSON.stringify(this.indices));
    this.openSnackBar('Index deleted success', 'Undo');
  }

  add() {
    const dialogRef = this.dialog.open(AddIndexComponent, {
      width: '50%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(data => {
      this.indices = JSON.parse(window.localStorage.getItem('indices'))
      console.log('The dialog was closed', data);
    });
  }

  searchChanged(event) {
    this.searchTerm = event.target.value;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}

export interface Index {
  id: string,
  name: string,
  description?: string,
  addedSections: {
    [id: string]: {
      section: Section,
      point: string
    }
  }
}

export interface Section {
  id: string
  name: string,
  addedBehaviours: {
    [id: string]: {
      behaviour: Behaviour,
      point: string
    }
  }
}

export interface Behaviour { //NOTE These are predefined
  id: string,
  name: string,
  properties?: Array<any>,
}
