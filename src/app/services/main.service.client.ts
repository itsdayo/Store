import { Injectable } from '@angular/core';
import { Article } from '../models/article.model.client';
import { map } from "rxjs/operators";
import {Http, Response} from '@angular/http';
import { environment } from '../../environments/environment'
// injecting service into module
@Injectable()
export class MainService {
  constructor(private http: Http) { }

   baseUrl = environment.baseUrl;
articles = [
        {_id: "123", developerId:"123", articleName:"Test", articleURL: "https://stackoverflow.com/questions/37948504/set-href-in-attribute-directive-in-angular"},
        {_id: "234", developerId:"123", articleName: "Hello", articleURL:"https://stackoverflow.com/questions/37948504/set-href-in-attribute-directive-in-angular"},
        {_id: "345", developerId:"123", articleName: "Lets Go", articleURL:"https://stackoverflow.com/questions/37948504/set-href-in-attribute-directive-in-angular"},
        {_id: "456", developerId:"123", articleName:"Test", articleURL:"https://stackoverflow.com/questions/37948504/set-href-in-attribute-directive-in-angular"},
        ];

  createArticle(uid: string,article: Article) {
    const url = this.baseUrl + '/api/user/'+ uid + '/article';
    return this.http.post(url, article).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));

  }


  // findUserById(userId: string) {
  //   for (let x = 0; x < this.users.length; x++) {
  //     if (this.users[x]._id === userId) {  return this.users[x]; }
  //   }
  // }

  findAllArticles(uid:string){
    const url = this.baseUrl + '/api/user/'+ uid + '/article';
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }


  // findUserByUsername(username: string) { … }
  // findUserByCredentials(username: string, password: string) { … }

  // deleteUser(userId) { … }

}