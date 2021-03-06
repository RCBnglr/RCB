import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.css']
})
export class ProjectGridComponent implements OnInit {
  //MOVE TO PROJECT SPECIFICS AFTER CLICKING ON GRID
  move() {
    this._router.navigate(['/projSpecs'])
  }

  //TO-DO ON PAGE RECOVERY
  ngOnInit() {
    this.http.get(this.url).subscribe((res) => {
      this.res = res;
      this.getData({ pageIndex: this.page, pageSize: this.size });
    }
    );
  }

  //DECLARATION
  url = 'http://localhost:3000/projectDetails';
  tiles: any = [];
  res: any;
  rating: number;
  page = 0; 
  size = 4;
  constructor(private _router: Router, private http: HttpClient) { }

 
  //FILTER GRIDS INTO RESPECTIVE PAGES
  getData(obj: any) {
    let index = 0,
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.tiles = this.res.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

  //STAR RATING
  setStarTable(record: any) {
    var tableList = this.tiles.find(function (obj: any) { return obj.name === record.name });
    for (var i = 0; i <= 4; i++) {
      if (i <= tableList.rating-1) {
        tableList.myList[i] = false;
      }
      else {
        tableList.myList[i] = true;
      }
    }
  }
}
