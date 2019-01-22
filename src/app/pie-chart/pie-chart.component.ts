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
      type: 'doughnut',
      data: {
        //labels: ["Jan",  "Feb" , "mar",  "Aprl", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets:[{
          label: 'sample data',
          
          data: [12,1,4,15,8,11],
          fill:true,
          lineTension:0.2,
          backgroundColor:["green","green","green","yellow","yellow","red"],
         // borderColor:"red",
          borderWidth:0
        },]
      },

      options:{

        rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      cutoutPercentage:50,
        // showLines: false,
        // title:{
        //   text:"Pie Chart",
        //   display:false
        // },
        // scales: {
          
        //   yAxes:[{
        //     ticks:{
        //       beginAtZero:true
        //     }
        //   }]
        // }
      }
    })
  }

}
