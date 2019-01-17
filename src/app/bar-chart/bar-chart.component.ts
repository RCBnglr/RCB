import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { UserService } from '../user.service';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  BarChart=[];
  total_test_cases=[]
  constructor(private user:UserService) { }
 
  ngOnInit() {
    this.user.testData().subscribe(res=>{
      console.log(res['total_test_cases']);
      //let testcases=res['total_test_cases'].map(res=>res);
      // console.log(this.total_test_cases);
    })

    this.BarChart=new Chart('barChart',{
      type:'bar',
      data: {
        labels: ["_V02.40.13",
        "_V02.40.14",
        "_V02.40.14",
        "_V02.40.15",
        "_V02.40.16",
        "_V02.40.17",
        "_V02.40.18",
        "_V02.40.18",
        "_V02.40.19",
        "_V02.40.20",
        "_V02.40.21",
        "_V02.40.22",
        "_V02.40.23"],
        datasets:[{
          data:[1,56.4,45],
          label: 'Total Test Cases',

          //data: [512,312,612,524,124,208,510,511,508,509,508,507,78],
           
          backgroundColor:"red",
          borderWidth:1
        },{
          label: 'Test cases executed',
            data: [87,154,182,180,178,180,182,183,180,181,180,12,78],
            
            backgroundColor:"green",
            borderWidth:1
          },{
            label: 'Tests outplanned',
              data: [425,154,182,344,178,328,328,328,328,328,328,495,0],
             
              backgroundColor:"black",
              borderWidth:1
            },{
              label: 'passed',
                data: [87,154,182,180,178,180,182,183,180,181,180,12,78],
                
                backgroundColor:'orange',
                hoverBackgroundColor:'green',
                borderColor:"orange",
                borderWidth:1
              },{
                label: 'Total UT defects found',
                  data: [1,3,0,3,0,2,3,2,1,2,2,0,5],
                  
                  backgroundColor:"red",
                  borderWidth:3
                }]
      },options:{
        title:{
          text:"Bar Chart",
          display:true
        },
        scales: {
          xAxes: [{
            stacked: false,
          }],
          yAxes:[{stacked: false,
            ticks:{
              beginAtZero:true
            }
          }]
        }}
    })
  }

  
}
