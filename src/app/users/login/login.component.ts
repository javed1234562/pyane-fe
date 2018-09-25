import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ToasterContainerComponent, ToasterService, ToasterModule } from 'angular2-toaster';
import { CommonService } from '../common.service';
import { Routes, Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // logincredintional
  emailid: any;
  password: any;
  // SIGNUPCRED
  username: any;
  email: any;
  signuppassword: any;
  confirmpassword: any;
  specilization = '';
  address = '';
  isdr:boolean = false;
  constructor(private router: Router, private toaster: ToasterService, private ss: CommonService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $('#login-form-link').click(function (e) {
      $("#login-form").delay(100).fadeIn(100);
      $("#register-form").fadeOut(100);
      $('#register-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
    $('#register-form-link').click(function (e) {
      $("#register-form").delay(100).fadeIn(100);
      $("#login-form").fadeOut(100);
      $('#login-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
  }
  checkDr(){
    if($('#doctor').is(":checked")){
      this.isdr = true;
    } else{
      this.isdr = false;
    }
  }
  login() {
    if (!this.emailid || !this.password) {
      this.toaster.pop('error', '', 'Please Fill all the Fields!');
      return false;
    }
    let ob = {
      email: this.emailid,
      password: this.password
    };
    this.ss.authenticate(ob).subscribe((result: any) => {
      if (result.success) {
        localStorage.setItem('userId',result.msg._id);
          if(!result.msg.isDoctor)
          this.router.navigate(['/dashboard']);
        else
          this.router.navigate(['/drdashboard']);

        }
        else {
        this.toaster.pop('warning', '', 'Invalid Details');

      }
    })

  }
  signup() {
    let formValid = true;
    console.log()
     if(this.isdr){
      if (!this.username || !this.email || !this.signuppassword || !this.confirmpassword || !this.address || !this.specilization) {
        this.toaster.pop('error', '', 'Please Fill all the Fields!');
        formValid = false;
        return false;
      }
     }
     if(!formValid){
       return false;
     }
    if (!this.username || !this.email || !this.signuppassword || !this.confirmpassword) {
      this.toaster.pop('error', '', 'Please Fill all the Field!');
      return false;
    }
    if (this.signuppassword != this.confirmpassword) {
      this.toaster.pop('error', '', 'Password doest match!');
      return false;
    }
    let obj={
      email:this.email,
      password:this.signuppassword,
      name:this.username,
      isDoctor:this.isdr,
      address:this.address,
      specilization:this.specilization
    }
    this.ss.signup(obj).subscribe((result:any)=>{
      if(result.success){
        this.toaster.pop('error', '', 'Suucessfully Created Account!');
        $("#login-form").delay(100).fadeIn(100);
      $("#register-form").fadeOut(100);
      $('#register-form-link').removeClass('active');
      $("#login-form").addClass('active');
      } else{
        this.toaster.pop('error', '', 'OOps Something Went wrong!');
      }
    })

  }
}
