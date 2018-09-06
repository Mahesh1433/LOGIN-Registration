import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Response } from '@angular/http';
import { Http,Headers} from '@angular/http';
import { Routes, RouterModule} from "@angular/router";
import { Router} from "@angular/router";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
 
  
  styleUrls: ['./users.component.css'],
  providers:[UserService]
})




export class UsersComponent implements OnInit {
  users:User[];
  user:User;
  name: string;
  email: string;
  phone: string;
  password: string;
  
  

  constructor(private UserService:UserService,private router: Router,private http:Http) { 
    
   
  }
 
  getName(){
    return this.http.post('http://localhost:3000/api/name',User)
        .map(res=>res.json())
        .subscribe(User=>{
          this.users=User
        })
      }

  addUser(){
    const newUser = {
      name:this.name,
      email:this.email,
      phone:this.phone,
      password:this.password,
      
    }
    this.UserService.addUser(newUser)
    .subscribe(user =>{
      this.users=user
      
      
    });
  }
  getUser(){
    
    
    this.UserService.getUsers()
   .subscribe(users=>
   this.users = users);
   
     

  }

LoginUser(){
const newLogin={
  email:this.email,
  password:this.password
}



this.UserService.LoginUsers(newLogin)
.subscribe(user=>
   this.users=user);

}
deleteUser(id:any){
  var users=this.users;
  this.UserService.deleteUser(id)
  .subscribe(data=>{
    if (data.n==1){
      for(var i=0; i<users.length; i++)
      {
        if(users[i]._id==id)
        {
          users.splice(i,1);

        }
      }
    }
  })
}
  

  ngOnInit() {

    

  }

}
