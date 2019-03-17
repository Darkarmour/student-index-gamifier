import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-index',
  templateUrl: './add-index.component.html',
  styleUrls: ['./add-index.component.css']
})
export class AddIndexComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('data', data);
  }

  ngOnInit() {
  }

}
