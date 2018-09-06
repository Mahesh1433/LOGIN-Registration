import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';

//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {

  constructor(private http:Http) { }

  getUsers(){
    return this.http.get('http://localhost:3000/api/login')
        .map(res=>res.json());
  }
 
}
