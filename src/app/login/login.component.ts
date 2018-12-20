
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup=new FormGroup({
      email:new FormControl(null, [Validators.email, Validators.required]),
      password:new FormControl(null, [Validators.required])
  })
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  moveToUserhome(){
    this._router.navigate(['/userhome']);
  }
  check()
  {
    if(!this.loginForm.valid) {
      alert("Invalid");
      return; 
    }
    else this.moveToUserhome();
    this._userService.register(JSON.stringify(this.loginForm.value))
    .subscribe(
    data=> {console.log(data); this._router.navigate(['/userhome']);},
     error=>console.error(error)
   )
  }
  
}
