import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import {UserService} from '../user.service';
//import { LoginComponent } from './login/login.component';
//import { ListComponent } from './list/list.component';
import { User } from '../user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[UserService]
})



export class ListComponent implements OnInit {
  users:User[];
  user:User;
  name: string;
  email: string;
  phone: string;
  password: string;
  
  

  constructor(private UserService:UserService) { 
    
  }
  
  
  
  getUser(){
    
    
    this.UserService.getUsers()
   .subscribe(users=>
   this.users = users);
   
     

  }

  deleteUser(id:any){
    var users = this.users;
    this.UserService.deleteUser(id)
    .subscribe(data=>{
      if (data.n==1){
        for(var i=0; i<users.length; i++)
        {
          if(users[i]._id == id)
          {
            users.splice(i,1);
  
          }
        }
      }
    })
  }


  


  
  

  ngOnInit() {

   this.getUser();

  }

}


