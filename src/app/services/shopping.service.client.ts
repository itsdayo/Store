import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { map } from 'rxjs/operators'
import {Response, RequestOptions} from '@angular/http';

import { Router } from '@angular/router';


@Injectable()

export class ShoppingService {
  constructor() { }
counter: number= 0;


  counterClick() {
   this.counter+1
   return this.counter
   
  }

  // findUserByCredentials(username: string, password: string) { 
  //     const url = this.baseUrl +'/api/user?username='+ username + '&password=' + password
  //     return this.http.get(url).pipe(map(
  //       (response: Response) =>{
  //         return response.json()
  //       }
  //       ))
  //     }
  

  }
