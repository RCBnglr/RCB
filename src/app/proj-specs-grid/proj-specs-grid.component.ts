import { Component, OnInit } from '@angular/core';

export interface Tile1 {
  cols: number;
  rows: number;
  text: string;
}
export interface Tile2 {
 
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-proj-specs-grid',
  templateUrl: './proj-specs-grid.component.html',
  styleUrls: ['./proj-specs-grid.component.css']
})
export class ProjSpecsGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  projHeading: Tile1[] = [
    {text: 'Takt1', cols: 1, rows: 1},
    {text: 'Takt2', cols: 1, rows: 1},
    {text: 'Takt3', cols: 1, rows: 1},
   ]; 

  tiles: Tile2[] = [
    {text: 'Feature', cols: 1, rows: 2 },
    {text: 'Code Repo', cols: 2, rows: 2},
    {text: 'Build', cols: 1, rows: 4},
    {text: 'Quality', cols: 1, rows: 2},
    {text: 'Monitor', cols: 2, rows: 2},
  ];

}
