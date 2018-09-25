import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Options } from 'selenium-webdriver/chrome';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class CommonService {

  constructor(private http:HttpClient) { }
  authenticate(search){
    return this.http.post(environment.baseUrl+'login',{obj:search},httpOptions);
    
  }
  signup(search){
    return this.http.post(environment.baseUrl+'signup',search,httpOptions);
    
  }
  getdoctors(){
    return this.http.post(environment.baseUrl+'getdoctors',{},httpOptions);
    
  }
  getAppointmentDetails(userId){
    return this.http.post(environment.baseUrl+'getAppointmentDetails',{userId:userId},httpOptions);
    
  }
  deleteAppointment(user){
    return this.http.post(environment.baseUrl+'deleteAppointment',{user:user},httpOptions);
    
  }
  drgetAppointmentDetails(userId){
    return this.http.post(environment.baseUrl+'drgetAppointmentDetails',{userId:userId},httpOptions);
    
  }
  drdeleteAppointment(user){
    return this.http.post(environment.baseUrl+'drdeleteAppointment',{user:user},httpOptions);
    
  }
  
  saveAppointment(obj){
    return this.http.post(environment.baseUrl+'saveAppointment',obj,httpOptions);
    
  }
  
}
