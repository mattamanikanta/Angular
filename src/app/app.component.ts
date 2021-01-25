import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud';
  allUsers: Object;
  isEdit = false;
  userObj = {
    email: "",
    password: "",
    id: ""
  };

  constructor(private commonService: CommonService) {}
   ngOnInit() {
     this.getLatestUsers();
   }
  addUser(formObj){
    console.log(formObj);
    this.commonService.createUser(formObj).subscribe(response => {
      this.getLatestUsers();
    });
  }

  getLatestUsers(){
    this.commonService.getAllUsers().subscribe(response => {
      this.allUsers = response;
    });
  }

  editUser(user) {
    this.isEdit = true;
    this.userObj= user;
  }

  deleteUser(user) {
    this.commonService.deleteUser(user).subscribe(response => {
      this.getLatestUsers();
    });
  }

  updateUser() {
   this.isEdit = !this.isEdit;
   this.commonService.updateUser(this.userObj).subscribe(()=> {
    this.getLatestUsers();
   })
  }
}
