import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { map } from 'rxjs/operators'
import {Response, RequestOptions, Http} from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable()

export class ItemsService {
  constructor(private http: Http) { }
   baseUrl = environment.baseUrl;



createItem(user: User) {
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user).pipe(map(
      (response: Response) => {
        return response.json();
      }

      ))
  }

finditemByUserId(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url).pipe(map(
      (response: Response) => {
      return response.json() }
       ))

  }

findItem() {
    const url = this.baseUrl + '/api/item' ;
    return this.http.get(url).pipe(map(
      (response: Response) => {
      // return response.json()
       return response }
       ))

  }


  }

  // findUserByCredentials(username: string, password: string) { 
  //     const url = this.baseUrl +'/api/user?username='+ username + '&password=' + password
  //     return this.http.get(url).pipe(map(
  //       (response: Response) =>{
  //         return response.json()
  //       }
  //       ))
  //     }
  

  
