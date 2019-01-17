import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  LineChart=[];
  constructor() { }

  ngOnInit() {

    this.LineChart=new Chart('lineChart', 
    {
      type: 'line',
      data: {
        labels: ["Jan",  "Feb" , "mar",  "Aprl", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets:[{
          label: 'sample data',
          
          data: [12,1,3,4,15,12,9,4,3,5,8,11],
          fill:true,
          lineTension:0.2,
          backgroundColor: 'red',
					borderColor: 'black ',
          borderWidth:2
        },]
      },

      options:{
        responsive: true,
        title:{
          text:"line Chart",
          display:true
        },tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
        scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Month'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Value'
						}
					}]
				}
      }
    }
      
    )
  }

}
