

// import { Component, OnInit } from '@angular/core';

// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-userhome',
//   templateUrl: './userhome.component.html',
//   styleUrls: ['./userhome.component.css']
// })
// export class UserhomeComponent implements OnInit {

//   constructor(private _router:Router) { }

//   ngOnInit() {
//   }

//   moveToLogin(){
//     this._router.navigate(['/login']);
//   }
// }




import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  // filterSelection(all:any)
  //     filterSelection(c) {
  //       var x, i;
  //       x = document.getElementsByClassName("filterDiv");
  //       if (c == "all") c = "";
  //       for (i = 0; i < x.length; i++) {
  //         this.w3RemoveClass(x[i], "show");
  //         if (x[i].className.indexOf(c) > -1) this.w3AddClass(x[i], "show");
  //       }
  //     }
  //     w3RemoveClass(element, name) {
  //       var i, arr1, arr2;
  //       arr1 = element.className.split(" ");
  //       arr2 = name.split(" ");
  //       for (i = 0; i < arr2.length; i++) {
  //         while (arr1.indexOf(arr2[i]) > -1) {
  //           arr1.splice(arr1.indexOf(arr2[i]), 1);     
  //         }
  //       }
  //       element.className = arr1.join(" ");
  //     }
  //     w3AddClass(element, name) {
  //       var i, arr1, arr2;
  //       arr1 = element.className.split(" ");
  //       arr2 = name.split(" ");
  //       for (i = 0; i < arr2.length; i++) {
  //         if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  //       }
  //     }
      
            
      // <!-- // // Add active class to the current button (highlight it)
      // // var btnContainer = document.getElementById("myBtnContainer");
      // // var btns = btnContainer.getElementsByClassName("btn");
      // // for (var i = 0; i < btns.length; i++) {
      // //   btns[i].addEventListener("click", function(){
      // //     var current = document.getElementsByClassName("active");
      // //     current[0].className = current[0].className.replace(" active", "");
      // //     this.className += " active";
      // //   });
      // // } -->

  // moveToLogin(){
  //   this._router.navigate(['/login']);
  // }
  public portfolio=[
    {name:'Project 1', status:'ongoing'},         
    {name:'Project 2', status:'ongoing'},
    {name:'Project 3', status:'ongoing'},
    {name:'Project 4', status:'ongoing'},
    {name:'Project 5', status:'ongoing'},
    {name:'Project 6', status:'Completed'}];
} 
