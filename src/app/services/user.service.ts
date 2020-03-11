import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string;

  constructor(
    
private httpClient :HttpClient) {
  this.baseUrl="http://localhost:7777/users/users";
 }
 getAll() : Observable<User []>{
  return this.httpClient.get<User []>(this.baseUrl);
 }
 getById(id:number) : Observable<User >{ 
  return this.httpClient.get<User >(`${this.baseUrl}/${id}`);
 }
 add(user:User ) : Observable<User >{
   return this.httpClient.post<User>(this.baseUrl,user);
 }


  
}
