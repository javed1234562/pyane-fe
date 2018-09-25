import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ToasterContainerComponent, ToasterService, ToasterModule } from 'angular2-toaster';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  appointments:any;
  constructor(private toaster:ToasterService,private ss:CommonService) { }

  ngOnInit() {
    this.getDetails();
  }
  getDetails(){
    let userId = localStorage.getItem('userId');
    this.ss.drgetAppointmentDetails(userId).subscribe((result:any)=>{
      if(result.success){
        this.appointments = result.message;
      }
    })
  }
  deleteApp(id){
    let user={
        appId:id,
        userId:localStorage.getItem('userId')
    }
    this.ss.drdeleteAppointment(user).subscribe((result:any)=>{
      if(result.success){
       this.toaster.pop('success','','Deleted!');
       this.appointments = result.message;
      }
    })

  }
}
