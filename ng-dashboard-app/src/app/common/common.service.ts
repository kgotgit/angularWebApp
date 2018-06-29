import { Injectable } from '@angular/core';
import { UserState } from '../beans/user-state';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';


@Injectable()
export class CommonService {
  private endPoint = `${env.appUri}`;
 

  constructor(private http:HttpClient) { }

  fetchUserStateRefData():Observable<UserState[]>{
    return this.http.get<UserState[]>(`${this.endPoint}/getuserstates`);
  }
}
