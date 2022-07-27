import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string='http://localhost/users/';

  constructor(private clientHttp:HttpClient) { }

  AddUser(dataUser:User):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar=1",dataUser);
  }
}
