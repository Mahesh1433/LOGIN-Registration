

import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';

//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';



@Injectable()
export class ForgotService {

  constructor(private http:Http){
    
  }
  
  
 
  updatePWD(Update){
    return this.http.put('http://localhost:3000/api/update',Update)
    .map(res=>res.json());
  }

 
  ForgotPasswords(newforgot){
    
    var headers=new Headers();
    headers.append('Content-Type','application/json',);
    return this.http.post('http://localhost:3000/api/forgot',newforgot,{headers:headers})
    .map(res => {
      console.log(res);
    
            return res.json();
            
            
      
    })

    
    
       
    
    
  }
}
  


