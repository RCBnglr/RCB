import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  PieChart=[];
  constructor() { }

  ngOnInit() {
    this.PieChart=new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ["Jan",  "Feb" , "mar",  "Aprl", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets:[{
          label: 'sample data',
          
          data: [12,1,3,4,15,12,9,4,3,5,8,11],
          fill:false,
          lineTension:0.2,
          borderColor:"red",
          borderWidth:1
        },]
      },

      options:{
        title:{
          text:"Pie Chart",
          display:true
        },
        scales: {
          
          yAxes:[{
            ticks:{
              beginAtZero:true
            }
          }]
        }
      }
    })
  }

}
