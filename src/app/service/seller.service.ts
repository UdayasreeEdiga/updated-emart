import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from '../model/seller';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  baseUrl:string;

  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:7777/users/users"; 
}
getAll() : Observable<Seller []>{
  return this.httpClient.get<Seller []>(this.baseUrl);
 }
 getById(id:number) : Observable<Seller >{ 
  return this.httpClient.get<Seller >(`${this.baseUrl}/${id}`);
 }
 add(user:Seller ) : Observable<Seller>{
   return this.httpClient.post<Seller>(this.baseUrl,Seller);
 }

}