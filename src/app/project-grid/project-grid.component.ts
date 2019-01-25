import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.css']
})
export class ProjectGridComponent implements OnInit {

  url='http://localhost:3000/projectDetails';
  status=[];
  name=[];
  //portfolio=[];
  res:any;

  constructor(private _router:Router,private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe((res)=>{
     this.res=res;
    }
    );

  }
}
