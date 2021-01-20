import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  public employees = [
    {"id":1, "name":"parvin", "age":15},
    {"id":2, "name":"mani", "age":21},
    {"id":3, "name":"siva", "age":23},
    {"id":4, "name":"santhoshi", "age":55}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
