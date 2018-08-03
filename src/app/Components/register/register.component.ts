import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from '../../services/user.service.client'
import { User } from '../../models/user.model.client'
import { Router } from '@angular/router'
// import { SharedService} from '../../../services/shared.service.client'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
username: string;
password: string;
verifyPassword: string;
email: string;
name:string;
passwordError: boolean;
usernameError: boolean; 
 @ViewChild('f') registerForm: NgForm
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

register(){
this.username = this.registerForm.value.username; 
this.name = this.registerForm.value.name; 
this.email = this.registerForm.value.email; 
this.password = this.registerForm.value.password;
this.verifyPassword = this.registerForm.value.verifyPassword;

if(this.password !== this.verifyPassword){
	this.passwordError = true;
	this.usernameError = false;
	console.log(this.password)
	console.log(this.verifyPassword)

}else {

	this.passwordError=false;
	// this.userService.findUserByUsername(this.username).subscribe(data => {
	// 	if(!data) {

const user: User ={
	username: this.username,
	password: this.password,
	email: this.email,
	name: this.name
} 

			this.userService.createUser(user).subscribe(
				(data: User) => {
			// this.sharedService.user = data;
			 this.router.navigate(['user/'+data._id]);			
		
})
		}

// 		(error: any) =>{
// 		this.usernameError = true;
		
// 	}

// })


// }
}
}