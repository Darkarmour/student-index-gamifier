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
    this.indices.push({
      id: '1',
      name: 'Social Index',
      description: 'Trend on the social interactivity of the students',
      addedSections: [{
        id: '11',
        name: 'Conduct',
        point: 100,
        behaviours: [{
          id: '111',
          name: 'Feedback',
          point: 40
        },
        {
          id: '112',
          name: 'Absenteeism',
          point: 60
        },
        ]
      }, {
        id: '12',
        name: 'Co-Curricular',
        point: 200,
        behaviours: [{
          id: '121',
          name: 'Event participation',
          point: 120
        },
        {
          id: '122',
          name: 'Club Membership',
          point: 80
        }]
      }]
    });
    window.localStorage.setItem('indices', JSON.stringify(this.indices));
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
  description: string,
  addedSections: Array<Section>
}

export interface Section {
  id: string
  name: string,
  behaviours: Array<Behaviour>
  point: number
}

export interface Behaviour { //NOTE These are predefined
  id: string,
  name: string,
  properties?: Array<any>,
  point: number
}
