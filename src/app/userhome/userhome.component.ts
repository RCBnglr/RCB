

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
    {name:'Project 1', status:'Status: Ongoing'},         
    {name:'Project 2', status:'Status: Completed'},
    {name:'Project 3', status:'Status: Ongoing'},
    {name:'Project 4', status:'Status: Ongoing'},
    {name:'Project 5', status:'Status: Ongoing'},
    {name:'Project 6', status:'Status: Completed'},
    {name:'Project 7', status:'Status: Ongoing'},         
    {name:'Project 8', status:'Status: Completedg'},
    {name:'Project 9', status:'Status: Completed'},
    {name:'Project 10', status:'Status: Completed'},
    {name:'Project 11', status:'Status: Completed'},
    {name:'Project 12', status:'Status: Completed'},
    {name:'Project 13', status:'Status: Completed'},         
    {name:'Project 14', status:'Status: Ongoing'},
    {name:'Project 15', status:'Status: Completed'},
    {name:'Project 16', status:'Status: Completed'},
    {name:'Project 17', status:'Status: Ongoing'},
    {name:'Project 18', status:'Status: Completed'}];
}

