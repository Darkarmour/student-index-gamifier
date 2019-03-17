import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Section, Behaviour, Index } from '../setup/setup.component';

@Component({
  selector: 'app-add-index',
  templateUrl: './add-index.component.html',
  styleUrls: ['./add-index.component.css']
})
export class AddIndexComponent implements OnInit {

  indices: Array<Index> = [];
  sections: Array<Section> = [];
  behaviours: Array<Behaviour> = [];
  behaviourName: string = '';
  sectionName: string = '';
  indexName: string = '';
  addedBehaviours: {
    [id: string]: {
      behaviour: Behaviour,
      point: string
    }
  } = {};
  addedSections: {
    [id: string]: {
      section: Section,
      point: string
    }
  } = {}
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar) {
    this.indices = JSON.parse(window.localStorage.getItem('indices')) || [];
    this.sections = JSON.parse(window.localStorage.getItem('sections')) || [];
    this.behaviours = JSON.parse(window.localStorage.getItem('behaviours')) || [];
    this.initAddedBehaviours();
    this.initAddedSections();
  }

  ngOnInit() {
  }

  addIndex() {
    this.indices.push({
      id: '2' + this.indexName,
      name: this.indexName,
      addedSections: this.addedSections
    });
    window.localStorage.setItem('indices', JSON.stringify(this.indices));
    this.openSnackBar('Index added successfully', 'Undo');
    this.indexName = '';
    this.initAddedSections();
  }

  addSection() {
    this.sections.push({
      id: '1' + this.sectionName,
      name: this.sectionName,
      addedBehaviours: this.addedBehaviours
    });
    window.localStorage.setItem('sections', JSON.stringify(this.sections));
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

  initAddedSections() {
    this.addedSections = {};
    for (let section of this.sections) {
      this.addedSections[section.id] = {
        section: section,
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

  indexNameChanged(event) {
    this.indexName = event.target.value;
  }

  behaviourPointChanged(event, addedBehaviour: {
    behaviour: Behaviour,
    point: number
  }) {
    addedBehaviour.point = event.target.value;
  }

  sectionPointChanged(event, addedSection: {
    section: Section,
    point: number
  }) {
    addedSection.point = event.target.value;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
