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
  behaviourName: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar) {
    this.sections = JSON.parse(window.localStorage.getItem('sections')) || [];
    this.behaviours = JSON.parse(window.localStorage.getItem('behaviours')) || [];
  }

  ngOnInit() {
  }

  addIndex() {
    this.openSnackBar('Index added successfully', 'Undo');
  }

  addSection() {
    this.openSnackBar('Section added successfully', 'Undo');
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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
