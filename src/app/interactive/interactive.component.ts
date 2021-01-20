import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.css']
})
export class InteractiveComponent implements OnInit {

  public color = "yellow";
  public colors = ["red", "orange", "green", "yellow"];

  constructor() { }

  ngOnInit(): void {
  }

}
