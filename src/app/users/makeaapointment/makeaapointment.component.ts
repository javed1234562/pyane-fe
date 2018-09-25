import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ToasterContainerComponent, ToasterService, ToasterModule } from 'angular2-toaster';
import { Routes, Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-makeaapointment',
  templateUrl: './makeaapointment.component.html',
  styleUrls: ['./makeaapointment.component.css']
})
export class MakeaapointmentComponent implements OnInit {
  name: any;
  email: any;
  appointmentDate: any;
  appointTime: any;
  drId: any;
  AppointMentFor: any;

  doctors: any;
  checkupTypes = ["Height / weight check",
    " Blood pressure check",
    " Cholesterol level check",
    " Blood sugar test",
    " Throat check",
    " Ear check",
    " Eye check",
    "Electrocardiogram (for those at a higher risk of heart disease)",
    "Chest x-ray (for heavy smokers)"];
  timearray = ["8:00 to 9:00 AM", "9:00 to 10:00 AM", "10.00 to 11.00 AM", "11.00 to 12 AM", "12.00 to 1 PM"]
  constructor(private ss: CommonService, private toaster: ToasterService,private router:Router) { }

  ngOnInit() {
    this.getDoctors();
  }
  ngAfterViewInit() {
    //   $('.datepicker').datetimepicker({
    //     format: 'dd/mm/yyyy'
    // });
    $("#date").datepicker();
  }
  getDoctors() {
    this.ss.getdoctors().subscribe((result: any) => {
      if (result.success) {
        this.doctors = result.mesage;
      } else {

      }
    })
  }
  makeAppointment() {




    this.appointmentDate = $('#date').val();
    this.appointTime = $('#time').val();
    this.drId = $('#doctorname').val();
    this.AppointMentFor = $('#appointmentfor').val();
    let obj = {
      name: this.name,
      email: this.email,
      userId: localStorage.getItem('userId'),
      appointmentDate: this.appointmentDate,
      appointTime: this.appointTime,
      drId: this.drId,
      AppointMentFor: this.AppointMentFor
    }
    if (!this.appointmentDate || !this.appointTime || !this.drId || !this.AppointMentFor || !this.drId || !this.name) {
      this.toaster.pop('error', '', 'Please Select all fields!');
      return false;
    }
    this.ss.saveAppointment(obj).subscribe((result: any) => {
     if(result.success){
      this.toaster.pop('success', '', 'Suucessfully made a appointment!');;
      this.router.navigate(['/dashboard/usersAppointments']);
     } else{

     }
    })
  }
}
