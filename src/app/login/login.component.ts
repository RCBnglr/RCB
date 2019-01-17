
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import{FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

// // form= new FormGroup({
// //   email: new FormControl('',[Validators.email, Validators.required]),
// //   password: new FormGroup(null , Validators.required)
// // })

//   // loginForm:FormGroup=new FormGroup({
//   //     email:new FormControl(null, [Validators.email, Validators.required]),
//   //     password:new FormControl(null, [Validators.required,Validators.minLength(6)])
//   // })
//   constructor(private _router:Router, private _fb:FormBuilder) { }
//   // loginForm1:FormGroup;
//   // ngOnInit() {
//   //   // this.loginForm1=this._fb.group({
//   //   //   email:[],
//   //   //   password:[]
//   //   // })
//   // }
//       ngOnInit(){}
    
//   // moveToUserhome(){
//   //   this._router.navigate(['/userhome']);
//   // }
//   // check()
//   // {
//   //   // if(!this.loginForm.valid) {}
//   //   // else {
//   //   //   this.moveToUserhome();
//   //   //   console.log(JSON.stringify(this.loginForm.value));}
//   //   this.moveToUserhome();


//     loginUser(form){
//       console.log(form.value)
//     }
//   }
  
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