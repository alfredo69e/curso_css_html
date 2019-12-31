import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  { path: '', component: InicioComponent },

];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardComponent,
    InicioComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]

})
export class ContentModule { }
