import { Injectable } from '@angular/core';
import { Post } from '../models/posting.model.client';
import { map } from 'rxjs/operators'
import {Response, RequestOptions, Http} from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable()

export class PostsService {
  constructor(private http: Http) { }
   baseUrl = environment.baseUrl;



createPost(post: Post) {
    const url = this.baseUrl + '/api/user/post';
    return this.http.post(url, post).pipe(map(
      (response: Response) => {
        return response.json();
      }

      ))
  }

findPostByUserId(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url).pipe(map(
      (response: Response) => {
      return response.json() }
       ))

  }

  findPostbyTitle(name:string) {
    const url = this.baseUrl + '/api/post/';
    return this.http.post(url,name).pipe(map(
      (response: Response) => {
      return response.json() }
       ))

  }

  AddShoppingCart(item:any) {
    const url = this.baseUrl + '/api/post/:uid';
    return this.http.post(url,item).pipe(map(
      (response: Response) => {
        console.log(response)
      return response.json() }
       ))

  }

  AddWatchList(item:any) {
    const url = this.baseUrl + '/api/watchlist';
    return this.http.post(url,item).pipe(map(
      (response: Response) => {
      return response.json() }
       ))

  }

findPost() {
    const url = this.baseUrl + '/api/posting' ;
    return this.http.get(url).pipe(map(
      (response: Response) => {
       return response.json()

        }
       ))

  }
  findShoppingItem(uid) {
    const url = this.baseUrl + '/api/shopping' ;
    return this.http.get(url).pipe(map(
      (response: Response) => {
       return response.json()
       

        }
       ))

  }
  findWatchItem() {
    const url = this.baseUrl + '/api/watching' ;
    return this.http.get(url).pipe(map(
      (response: Response) => {
       return response.json()
       

        }
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
  

  
