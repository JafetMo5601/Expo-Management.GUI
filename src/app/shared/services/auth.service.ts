import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/Authenticate/login', { 
      username, password 
    }, httpOptions);
  }

  register(id: string, name: string , last: string, username: string, email: string, password: string, birthday: string): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/Authenticate/register', { 
      id, name, last, username, email, password, birthday}, httpOptions);
  }

  ForgetPassword(email: string): Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/Authenticate/ForgetPassword', {
    email}, httpOptions);
  }

  ResetPassword(token:string, email: string, newPassword:string, password:string): Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/Authenticate/ResetPassword', {
    token, email, newPassword, password}, httpOptions);
  }
}
