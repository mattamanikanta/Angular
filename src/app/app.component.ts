import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public name="";
  public value ="Siva";
  public message ="";
  public person = {
    "firstName": "siva",
    "lastName": "Mani"
  };
}
