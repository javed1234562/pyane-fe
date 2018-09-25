import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { MyappointmentsComponent } from './myappointments/myappointments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ToasterContainerComponent, ToasterService,ToasterModule} from 'angular2-toaster';
import {routes} from '../users/users.routes';
import { HeaderComponent } from './header/header.component';
import { MakeaapointmentComponent } from './makeaapointment/makeaapointment.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { DrdashboardComponent } from './drdashboard/drdashboard.component';
import { DrheadersComponent } from './drheaders/drheaders.component';
import {CommonService} from './common.service';

@NgModule({
  imports: [
    CommonModule,ToasterModule,RouterModule.forChild(routes),FormsModule
  ],
  declarations: [LoginComponent, MyappointmentsComponent, DashboardComponent, HeaderComponent, MakeaapointmentComponent, AppointmentDetailsComponent, DrdashboardComponent, DrheadersComponent],
  providers:[ToasterService,CommonService]
})
export class UsersModule { }
