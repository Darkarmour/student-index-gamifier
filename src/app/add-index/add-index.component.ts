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
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar) {
    this.sections = JSON.parse(window.localStorage.getItem('sections'));
    this.behaviours = JSON.parse(window.localStorage.getItem('behaviours'));
    if (!this.sections)
      this.initSections();
    if (!this.behaviours)
      this.initBehaviours();
  }

  initSections() {
    this.sections = [{
      id: '11',
      name: 'Conduct',
      point: 0
    }, {
      id: '12',
      name: 'Co-Curricular',
      point: 200
    }]
  }

  initBehaviours() {
    this.behaviours = [{
      id: '111',
      name: 'Feedback',
      point: 40
    },
    {
      id: '112',
      name: 'Absenteeism',
      point: 60
    }]
  }

  ngOnInit() {
  }

  addIndex() {
    this.openSnackBar('Index added successfully', 'Undo');
  }

  addSection() {
    this.openSnackBar('Section added successfully', 'Undo');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
