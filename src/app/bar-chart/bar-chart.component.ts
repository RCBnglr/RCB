import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { UserService } from '../user.service';
import 'rxjs/add/operator/map';
import {Data} from '../data';

//https://appdividend.com/2018/09/12/angular-charts-example-tutorial/

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

          //data: [512,312,612,524,124,208,510,511,508,509,508,507,78],
           
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


 // total_test_cases=[]
  // constructor(private user:UserService) { }
 
  // ngOnInit() {
  //   this.user.testData().subscribe(res=>{
  //     console.log(res['total_test_cases']);
  //     //let testcases=res['total_test_cases'].map(res=>res);
  //     // console.log(this.total_test_cases);
  //   })

    // this.BarChart=new Chart('barChart',{
    //   type:'bar',
    //   data: {
    //     labels: ["_V02.40.13",
    //     "_V02.40.14",
    //     "_V02.40.14",
    //     "_V02.40.15",
    //     "_V02.40.16",
    //     "_V02.40.17",
    //     "_V02.40.18",
    //     "_V02.40.18",
    //     "_V02.40.19",
    //     "_V02.40.20",
    //     "_V02.40.21",
    //     "_V02.40.22",
    //     "_V02.40.23"],
    //     datasets:[{
    //       data:[1,56.4,45],
    //       label: 'Total Test Cases',

    //       //data: [512,312,612,524,124,208,510,511,508,509,508,507,78],
           
    //       backgroundColor:"red",
    //       borderWidth:1
    //     },{
    //       label: 'Test cases executed',
    //         data: [87,154,182,180,178,180,182,183,180,181,180,12,78],
            
    //         backgroundColor:"green",
    //         borderWidth:1
    //       },{
    //         label: 'Tests outplanned',
    //           data: [425,154,182,344,178,328,328,328,328,328,328,495,0],
             
    //           backgroundColor:"black",
    //           borderWidth:1
    //         },{
    //           label: 'passed',
    //             data: [87,154,182,180,178,180,182,183,180,181,180,12,78],
                
    //             backgroundColor:'orange',
    //             hoverBackgroundColor:'green',
    //             borderColor:"orange",
    //             borderWidth:1
    //           },{
    //             label: 'Total UT defects found',
    //               data: [1,3,0,3,0,2,3,2,1,2,2,0,5],
                  
    //               backgroundColor:"red",
    //               borderWidth:3
    //             }]
    //   },options:{
    //     title:{
    //       text:"Bar Chart",
    //       display:true
    //     },
    //     scales: {
    //       xAxes: [{
    //         stacked: false,
    //       }],
    //       yAxes:[{stacked: false,
    //         ticks:{
    //           beginAtZero:true
    //         }
    //       }]
    //     }}
    // })
  //}
