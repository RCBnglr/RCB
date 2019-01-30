import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {
  
  ngOnInit(){}
name:string='';
  constructor(private _router: Router, private httpClient:HttpClient){}
  onName(event:any){
    this.name=event.target.value;
  }
  get(){
    this.httpClient.get('http://localhost:3000/projectDetails?q=this.name')
    .subscribe(
      (data)=>{console.log(data);}
    ) 
  
  }
  
  // data: any = [];
  // public portfolio = [
  //   { name: '1', status: 'Status: Ongoing', 'myList': [true, true, true, true, true], 'rating':2 },
  //   { name: '2', status: 'Status: Completed', 'myList': [true, true, true, true, true], 'rating':5 },
  //   { name: '3', status: 'Status: Ongoing', 'myList': [true, true, true, true, true], 'rating':1 },
  //   { name: '4', status: 'Status: Ongoing', 'myList': [true, true, true, true, true], 'rating':2 },
  //   { name: '5', status: 'Status: Ongoing', 'myList': [true, true, true, true, true], 'rating':4 },
  //   { name: '6', status: 'Status: Completed', 'myList': [true, true, true, true, true], 'rating':5 },
  //   { name: '7', status: 'Status: Ongoing', 'myList': [true, true, true, true, true], 'rating':3 },
  //   { name: '8', status: 'Status: Completedg', 'myList': [true, true, true, true, true], 'rating':3 },
  //   { name: '9', status: 'Status: Completed', 'myList': [true, true, true, true, true], 'rating':2 },
  //   { name: '10', status: 'Status: Completed', 'myList': [true, true, true, true, true], 'rating':3 },
  //   { name: '11', status: 'Status: Completed', 'myList': [true, true, true, true, true], 'rating':1 },
  //   { name: '12', status: 'Status: Completed', 'myList': [true, true, true, true, true], 'rating':2 },
  //   { name: '13', status: 'Status: Completed', 'myList': [true, true, true, true, true], 'rating':5 },
  //   { name: '14', status: 'Status: Ongoing', 'myList': [true, true, true, true, true], 'rating':4 },
  //   { name: '15', status: 'Status: Completed', 'myList': [true, true, true, true, true], 'rating':4 },
  //   { name: '16', status: 'Status: Completed', 'myList': [true, true, true, true, true], 'rating':1 },
  //   { name: '17', status: 'Status: Ongoing', 'myList': [true, true, true, true, true], 'rating':2 },
  //   { name: '18', status: 'Status: Completed', 'myList': [true, true, true, true, true], 'rating':3 }];
  // page = 0;
  // size = 4;
  
  // ngOnInit() {
  //   this.getData({ pageIndex: this.page, pageSize: this.size });
  //   // this.setStarTable({});
  // }
  // getData(obj: any) {
  //   let index = 0,
  //     startingIndex = obj.pageIndex * obj.pageSize,
  //     endingIndex = startingIndex + obj.pageSize;

  //   this.data = this.portfolio.filter(() => {
  //     index++;
  //     return (index > startingIndex && index <= endingIndex) ? true : false;
  //   });
  // }
  // setStarTable(record:any) {
  //   var tableList = this.portfolio.find(function (obj: any) { return obj.name === record.name });
  //   for (var i = 0; i <= 4; i++) {
  //     if (i <= tableList.rating-1) {
  //       tableList.myList[i] = false;
  //     }
  //     else {
  //       tableList.myList[i] = true;
  //     }
  //   }
  // }
  
  
}
