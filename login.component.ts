import { Component, OnInit } from '@angular/core';
import {  Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]

})
export class LoginComponent implements OnInit {
  @Input() result = "Status...";
  @Output() resultChange = new EventEmitter<string>();
  users:User[];
  user:User;
  name: string;
  email: string;
  phone: string;
  password: string;
  
 

  constructor(private UserService:UserService) { 
    
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
      this.users.push(user);
     
      if(user=0){
        
        this.result="Registration Failed Email alredy taken...";
        this.resultChange.emit(this.result);
       }
       else{
        this.result="Registration success...";
        
      this.resultChange.emit(this.result);
    }
    });



  }
  
   

  

  

  ngOnInit() {
  }

}
