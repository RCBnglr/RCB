import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ProjSpecsComponent } from './proj-specs/proj-specs.component';
import { ProjectGridComponent } from './project-grid/project-grid.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'userhome', component:UserhomeComponent},
  {path: 'pie-chart', component: PieChartComponent},
  {path:'line-chart', component:LineChartComponent},
  {path:'bar-chart', component:BarChartComponent},
  {path:'projSpecs', component:ProjSpecsComponent},
  {path:'grid', component:ProjectGridComponent}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
