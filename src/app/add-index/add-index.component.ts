import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Section, Behaviour } from '../setup/setup.component';

@Component({
  selector: 'app-add-index',
  templateUrl: './add-index.component.html',
  styleUrls: ['./add-index.component.css']
})
export class AddIndexComponent implements OnInit {

  sections: Array<Section> = [];
  behaviours: Array<Behaviour> = [];
  behaviourName: string = '';
  sectionName: string = '';
  addedBehaviours: {
    [id: string]: {
      behaviour: Behaviour,
      point: string
    }
  } = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar) {
    this.sections = JSON.parse(window.localStorage.getItem('sections')) || [];
    this.behaviours = JSON.parse(window.localStorage.getItem('behaviours')) || [];
    this.initAddedBehaviours();
  }

  ngOnInit() {
  }

  addIndex() {
    this.openSnackBar('Index added successfully', 'Undo');
  }

  addSection() {
    this.sections.push({
      id: '1' + this.sectionName,
      name: this.sectionName,
      addedBehaviours: this.addedBehaviours
    });
    window.localStorage.setItem('behaviours', JSON.stringify(this.behaviours));
    this.openSnackBar('Section added successfully', 'Undo');
    this.sectionName = '';
    this.initAddedBehaviours();
  }

  initAddedBehaviours() {
    this.addedBehaviours = {};
    for (let behaviour of this.behaviours) {
      this.addedBehaviours[behaviour.id] = {
        behaviour: behaviour,
        point: '0'
      }
    }
  }

  addBehaviour() {
    this.behaviours.push({
      id: '0' + this.behaviourName,
      name: this.behaviourName,
    });
    window.localStorage.setItem('behaviours', JSON.stringify(this.behaviours));
    this.openSnackBar('Behaviour added successfully', 'Undo');
    this.behaviourName = '';
  }

  behaviourNameChanged(event) {
    this.behaviourName = event.target.value;
  }

  sectionNameChanged(event) {
    this.sectionName = event.target.value;
  }

  behaviourPointChanged(event, addedBehaviour: {
    behaviour: Behaviour,
    point: number
  }) {
    addedBehaviour.point = event.target.value;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
