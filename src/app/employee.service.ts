import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1, "name":"parvin", "age":15},
      {"id":2, "name":"mani", "age":21},
      {"id":3, "name":"siva", "age":23},
      {"id":4, "name":"santhoshi", "age":55}
    ];  
  }
}
