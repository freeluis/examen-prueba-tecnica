import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlApiEmployees } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
  private http: HttpClient,
  ) { }

  getEmployees(){
return this.http.get(`${urlApiEmployees}luis_garcia`);
  }
  setEmployee(params: any){
    console.log(params);
    const headers = { 'content-type': 'application/json'}  
    return this.http.post(`${urlApiEmployees}luis_garcia`, params, {'headers': headers});
  }
}
