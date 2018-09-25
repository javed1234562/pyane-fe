import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { MakeaapointmentComponent } from './makeaapointment/makeaapointment.component';
import { MyappointmentsComponent } from './myappointments/myappointments.component';
import { DrdashboardComponent } from './drdashboard/drdashboard.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';

export const routes: Routes = [
{path:'',component:LoginComponent,pathMatch:'full'},
{path:'dashboard',component:DashboardComponent,pathMatch:'full'},
{path:'drdashboard',component:DrdashboardComponent,pathMatch:'full'},
{path:'drdashboard/drappointmentsdetails',component:AppointmentDetailsComponent,pathMatch:'full'},
{path:'dashboard/makeAppointment',component:MakeaapointmentComponent,pathMatch:'full'},
{path:'dashboard/usersAppointments',component:MyappointmentsComponent,pathMatch:'full'}
]