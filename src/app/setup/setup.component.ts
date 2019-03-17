import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  deleteIndex(indexId: string) {
    let indexToBeDeletable = this.indices.findIndex(index => index.id === indexId);
    if (indexToBeDeletable)
      this.indices.splice(indexToBeDeletable, 1);
    window.localStorage.setItem('indices', JSON.stringify(this.indices));
  }

  add() {
    const dialogRef = this.dialog.open(AddIndexComponent, {
      width: '50%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log('The dialog was closed', data);
    });
  }

  searchChanged(event) {
    this.searchTerm = event.target.value;
  }

}

export interface Index {
  id: string,
  name: string,
  description?: string,
  addedSections: { [id: string]: {
    section: Section,
    point: string 
  }
}
}

export interface Section {
  id: string
  name: string,
  addedBehaviours: { [id: string]: {
    behaviour: Behaviour,
    point: string
  }}
}

export interface Behaviour { //NOTE These are predefined
  id: string,
  name: string,
  properties?: Array<any>,
}
