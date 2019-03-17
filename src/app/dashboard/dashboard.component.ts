import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  constructor() { }
  LineChart = [];
  BarChart = [];
  PieChart = [];
  indices = [1,2];
  

  ngOnInit() {
    // Line chart:
    this.LineChart = new Chart('1lineChart', {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: 'Number of Social events participated by students',
          data: [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9],
          fill: true,
          lineTension: 0.2,
          borderWidth: 2,
          borderColor:"rgba(96,125,139)",
          backgroundColor: [
            "rgb(38,198,218)"
        ]
        }]
      },
      options: {
        title: {
          text: "Institution Index Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    this.LineChart = new Chart('2lineChart', {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: 'Boys',
          data: [ 10, 15, 16, 19, 3, 1, 9,9, 7, 3, 5, 2,],
          fill: false,
          lineTension: 0.2,
          borderWidth: 2,
          borderColor:"rgba(96,125,139)",
          backgroundColor: [
            "rgba(96,125,139)"
        ]
        },
        {
          label: 'Girls',
          data: [15,14,13,12,1,8,9,25,28,5,3,8],
          fill: false,
          lineTension: 0.2,
          borderWidth: 2,
          borderColor:"red",
          backgroundColor: [
            "red"]
        }
      ]
      },
      options: {
        title: {
          text: "Academic performance by students",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    console.log(this.LineChart)

  }

  getCanvasId(index: number): string {
    console.log("index"+index)
    return index+'lineChart';
  }


}
