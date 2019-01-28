import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.css']
})
export class ProjectGridComponent implements OnInit {
  move(){
    this._router.navigate(['/projSpecs'])
  }

  url='http://localhost:3000/projectDetails';
  status=[];
  name=[];
  tiles: any=[];
  res:any;
  page=0; size=6;
  constructor(private _router:Router,private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe((res)=>{
      this.res=res;
      this.getData({ pageIndex: this.page, pageSize: this.size });
    }
    );
    
  }
  getData(obj: any) {
    let index = 0,
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.tiles = this.res.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }
}
