
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Data} from '../data'

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  url='http://localhost:3000/projectDetails';
  status=[];
  name=[];
  //portfolio=[];
  res:any;

  constructor(private _router:Router,private http:HttpClient) { }

  barChart(){
    this._router.navigate(['/projSpecs']);
  }

  ngOnInit() {
    this.http.get(this.url).subscribe((res)=>{
     this.res=res;
    }
    );

  }
  
}

