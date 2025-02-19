import { Injectable } from '@angular/core';
import environments from '../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient){}

  private server = environments.serverURL;

  getToken() {
    return localStorage.getItem(environments.tokenName);
  }

  tokenHeader() {
    const token = this.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return {headers};
  }

  registration(data:object){
    return this.http.post(this.server + '/users/registration' , data);
  }

  login(data:object){
    return this.http.post(this.server + '/users/login', data);
  }

  select(table: string, field:string, op: string, value: string){
    return this.http.get(this.server + '/'+table+'/'+field+'/'+op+'/'+value, this.tokenHeader());
  }

  selectAll(table: string){
    return this.http.get(this.server + '/' + table, this.tokenHeader());
  }

  insert(table: string, data:object){
    return this.http.post(this.server + '/' + table + '/create', data, this.tokenHeader());
  }

  update(table:string, id:string, data:object){
    return this.http.post(this.server + '/' + table + '/' + id, data, this.tokenHeader());
  }

  delete(table:string, id:string){
    return this.http.delete(this.server + '/' + table + '/' + id, this.tokenHeader());
  }
}
