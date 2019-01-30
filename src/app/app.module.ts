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
import { ProjSpecsComponent } from './proj-specs/proj-specs.component';
import { ProjectGridComponent } from './project-grid/project-grid.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProjSpecsGridComponent } from './proj-specs-grid/proj-specs-grid.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { TrialComponent } from './trial/trial.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserhomeComponent,
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
    ProjSpecsComponent,
    ProjectGridComponent,
    NavComponent,
    FooterComponent,
    ProjSpecsGridComponent,
    TrialComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatGridListModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatMenuModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


