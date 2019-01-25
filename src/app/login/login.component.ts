import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

export class LoginComponent implements OnInit {
  moveToUserhome(){
        this._router.navigate(['/userhome']);
      }

  loginUser(form){
    console.log(form.value);
    this.moveToUserhome();
  }

  constructor(private _router:Router, private _fb:FormBuilder) { }

  ngOnInit(){}

}