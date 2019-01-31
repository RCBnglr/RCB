import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { fdatasync } from 'fs';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {
  details: any;
  data: any;
  found: boolean;
  i:Number=0;
  ngOnInit() { }
  name: string = '';
  constructor(private _router: Router, private httpClient: HttpClient) { }
  onName(event: any) {
    this.name = event.target.value;
    this.found = false;
  }
  get() {
    this.httpClient.get(`http://localhost:3000/projectDetails?q=${this.name}`)
      .subscribe(
        
        (data) => {
          this.details = data;
          this.found = true;
        });
  }
}
