import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { User } from '../../models/user.model.client'
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username: string;
password: string;
user: User ;


@ViewChild('f') loginForm: NgForm;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {}
login(){
	this.username = this.loginForm.value.username;
	this.password = this.loginForm.value.password;
this.user= this.userService.findUserByCredentials(this.username, this.password)
this.router.navigate(['/user/'+ this.user._id +'/main'])

}



}
