import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import { Router} from "@angular/router";
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';




@Injectable()
export class UserService {

  constructor(private http:Http,private router: Router){
    
  }
  
  updatePWD(id,data){
    return this.http.put('http://localhost:3000/api/update'+id,data)
    .map(res=>res.json());
  }
 
        
    
    
  

  getUsers(){
    return this.http.get('http://localhost:3000/api/users')
        .map(res=>res.json());
  }

  //add user method
  addUser(newUser)
  {
   // var headers=new Headers();
   // headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/user',newUser)//,{headers:headers})
    .map(res=>res.json());  
    
  }
  
  deleteUser(id){
    return this.http.delete('http://localhost:3000/api/user/'+id)
      .map(res => res.json());
  }
  LoginUsers(newLogin){
    
    //var headers=new Headers();
   // headers.append('Content-Type','application/json',);
    return this.http.post('http://localhost:3000/api/login',newLogin)//{headers:headers})
    .map(res => {
      console.log(res);

       return res.json();
      
      
      
            
      
    })

    
    
       
    
    
  }
}
  


