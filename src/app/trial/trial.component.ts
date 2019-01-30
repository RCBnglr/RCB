import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {
  data: any = [];
  public portfolio = [
    { name: '1', status: 'Status: Ongoing', 'myList': [true, true, true, true, true] },
    { name: '2', status: 'Status: Completed', 'myList': [true, true, true, true, true] },
    { name: '3', status: 'Status: Ongoing', 'myList': [true, true, true, true, true] },
    { name: '4', status: 'Status: Ongoing', 'myList': [true, true, true, true, true] },
    { name: '5', status: 'Status: Ongoing', 'myList': [true, true, true, true, true] },
    { name: '6', status: 'Status: Completed', 'myList': [true, true, true, true, true] },
    { name: '7', status: 'Status: Ongoing', 'myList': [true, true, true, true, true] },
    { name: '8', status: 'Status: Completedg', 'myList': [true, true, true, true, true] },
    { name: '9', status: 'Status: Completed', 'myList': [true, true, true, true, true] },
    { name: '10', status: 'Status: Completed', 'myList': [true, true, true, true, true] },
    { name: '11', status: 'Status: Completed', 'myList': [true, true, true, true, true] },
    { name: '12', status: 'Status: Completed', 'myList': [true, true, true, true, true] },
    { name: '13', status: 'Status: Completed', 'myList': [true, true, true, true, true] },
    { name: '14', status: 'Status: Ongoing', 'myList': [true, true, true, true, true] },
    { name: '15', status: 'Status: Completed', 'myList': [true, true, true, true, true] },
    { name: '16', status: 'Status: Completed', 'myList': [true, true, true, true, true] },
    { name: '17', status: 'Status: Ongoing', 'myList': [true, true, true, true, true] },
    { name: '18', status: 'Status: Completed', 'myList': [true, true, true, true, true] }];
  page = 0;
  size = 6;
  rating: number;
  ngOnInit() {
    this.getData({ pageIndex: this.page, pageSize: this.size });
  }
  getData(obj: any) {
    let index = 0,
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.data = this.portfolio.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }
  setStarTable(record: any, d: any) {
    this.rating = d + 1;
    var tableList = this.portfolio.find(function (obj: any) { return obj.name === record.name });
    for (var i = 0; i <= 4; i++) {
      if (i <= d) {
        tableList.myList[i] = false;
      }
      else {
        tableList.myList[i] = true;
      }
    }
  }
  
}
