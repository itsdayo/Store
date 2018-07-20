import { Injectable } from '@angular/core';


// injecting service into module

@Injectable()


export class MainService {

  constructor() { }

articles = [
        {_id: "123", developerId:"123", name:"", url: ""},
        {_id: "234", developerId:"123", name: "", url:""},
        {_id: "345", developerId:"123", name: "", url:""},
        {_id: "456", developerId:"123", name:"", url:""}
        ];


  createArticle(article: any) {
    article._id = Math.random();
    this.articles.push(article);
    return article;

  }


  // findUserById(userId: string) {
  //   for (let x = 0; x < this.users.length; x++) {
  //     if (this.users[x]._id === userId) {  return this.users[x]; }
  //   }
  // }


  // findUserByUsername(username: string) { … }
  // findUserByCredentials(username: string, password: string) { … }
  // updateUser(userId, user) { … }
  // deleteUser(userId) { … }

}