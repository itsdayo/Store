import { Injectable } from '@angular/core';
// injecting service into module
@Injectable()
export class UserService {
  constructor() { }

users = [
        {_id: "123", username: "alice", password: "alice", Name: "Alice Wonder", email: "alice@gmail.com"},
        {_id: "234", username: "bob", password: "bob", Name: "Bob Marley", email: "bob@whatever.com"},
        {_id: "345", username: "charly", password: "charly", Name: "Charly Garcia", email: "charly@hotmail.com"},
        {_id: "456", username: "shiyu", password: "shiyu", Name: "Shiyu Wang", email: "swang@ulem.org"}
        ];


  createUser(user: any) {
    user._id = Math.random();
    this.users.push(user);
    return user;

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