import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})

export class SetupComponent implements OnInit {

  indices: Array<Index> = [];
  constructor() { }

  ngOnInit() {
    this.indices.push({
      name: 'Social Index',
      description: 'Trend on the social interactivity of the students',
      addedSections: [{
        name: 'Conduct',
        point: 100,
        behaviours: [{
          name: 'Feedback',
          point: 40
        },
        {
          name: 'Absenteeism',
          point: 60
        },
        ]
      }, {
        name: 'Co-Curricular',
        point: 200,
        behaviours: [{
          name: 'Event participation',
          point: 120
        }, {
          name: 'Club Membership',
          point: 80
        }]
      }]
    })
  }

}

export interface Index {
  name: string,
  description: string,
  addedSections: Array<Section>
}

export interface Section {
  name: string,
  behaviours: Array<Behaviour>
  point: number
}

export interface Behaviour { //NOTE These are predefined
  name: string,
  properties?: Array<any>,
  point: number
}
