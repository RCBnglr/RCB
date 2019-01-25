import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { UserService } from '../user.service';
import 'rxjs/add/operator/map';
import {Data} from '../data';

//https://appdividend.com/2018/09/12/angular-charts-example-tutorial/ - reference

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  

  BarChart=[];
  url='http://localhost:3000/testData';
  build=[];
  Total_Test_Cases=[];
  Test_cases_executed=[];
  Tests_outplanned=[];
  Failed=[];
  passed=[];
  Total_UT_defects_found=[];

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y =>{
        this.build.push(y.build);
        this.Total_Test_Cases.push(y.Total_Test_Cases);
        this.Total_UT_defects_found.push(y.Total_UT_defects_found);
        this.Test_cases_executed.push(y.Test_cases_executed);
        this.Tests_outplanned.push(y.Tests_outplanned);
        this.passed.push(y.passed);
        this.Failed.push(y.Failed);
    });
    this.BarChart=new Chart('barChart',{
      type:'bar',
      data: {
        labels:this.build,
        datasets:[{
          data:this.Total_Test_Cases,
          label: 'Total Test Cases',


           
          backgroundColor:"red",
          borderWidth:1
        },{
          label: 'Test cases executed',
            data: this.Test_cases_executed,
            
            backgroundColor:"green",
            borderWidth:1
          },{
            label: 'Tests outplanned',
              data: this.Tests_outplanned,
             
              backgroundColor:"black",
              borderWidth:1
            },{
              label: 'passed',
                data: this.passed,
                
                backgroundColor:'orange',
                borderColor:"orange",
                borderWidth:1
              },{
                label: 'Total UT defects found',
                  data: this.Total_UT_defects_found,
                  
                  backgroundColor:"purple",
                  borderWidth:3
                }]
      },options:{
        title:{
          text:"Bar Chart",
          display:true
        },
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes:[{stacked: true,
            ticks:{
              beginAtZero:true
            }
          }]
        }}
    })
  })
  } 
}



