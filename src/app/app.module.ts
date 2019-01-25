import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user.service';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
<<<<<<< HEAD
import { ProjSpecsComponent } from './proj-specs/proj-specs.component';
=======
import { ProjectGridComponent } from './project-grid/project-grid.component';
>>>>>>> 5e60f9a1f48a8e6aaf8ab8ead9298e55e5278d72

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserhomeComponent,
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
<<<<<<< HEAD
    ProjSpecsComponent,
=======
    ProjectGridComponent,
>>>>>>> 5e60f9a1f48a8e6aaf8ab8ead9298e55e5278d72
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatGridListModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


