import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../../services/user.service.client'
import { ShoppingService} from "../../services/shopping.service.client"
import { SharedService} from "../../services/shared.service.client"
import { User } from "../../models/user.model.client";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
uid: string;
name: string;
username: string;
email: string; 
counter:number
user: User;
aUser:User;
firstName: string;
lastName: string;

@ViewChild('f') profileForm : NgForm; 
  constructor(private router: Router, private sharedService: SharedService, private shoppingService: ShoppingService, private activatedRoute : ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
  	this.counter = this.shoppingService.counter
  	this.activatedRoute.params.subscribe(
	params=>{ 
		this.uid = params["uid"]
	

  })



this.userService.findUserById(this.uid).subscribe(
	user =>{
		this.sharedService.user= user
		this.name = user.name;
		this.username= user.username;
		this.email = user.email;
		console.log(this.user)
	})

}


update(){

	this.username = this.profileForm.value.username
 	this.email = this.profileForm.value.email
	 this.firstName = this.profileForm.value.firstName
	 this.lastName = this.profileForm.value.lastName


	

	this.userService.findUserById(this.uid).subscribe(
		user =>{
			this.sharedService.user= user
			this.firstName = user.firstName;
			this.lastName = user.lastName
			this.username= user.username;
			this.email = user.email;
		
	this.userService.findUserByUsername(this.username).subscribe(
				(user: User)=> {
				this.aUser = user
				}, 
	 );
		})
	
		// if(this.aUser && this.oldUsername !==this.username){
	 	//  this.usernameTaken = true;
    //     this.submitSuccess = false;
    // }else{
	 		const updateUser : User ={
 			_id : this.user._id,
 			username: this.username,
 			password: this.user.password,
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email 

	 	};
	 
		this.userService.updateUser(this.uid,updateUser).subscribe(
			(user2: User)=>{
		// this.usernameTaken = false;
		// this.submitSuccess = true;
			});
 }


	

 

 
	
		

	// if( this.aUser && this.oldUsername !==this.username){
	// 	 this.usernameTaken = true;
	// 		 this.submitSuccess = false;
	//  }else{
	// 		const updateUser : User ={
	// 		_id : this.user._id,
	// 		username: this.username,
	// 		password: this.user.password,
	// 	 name:this.name,
	// 	 email: this.email 

	// 	};
	
	//  this.userService.updateUser(this.uid,updateUser).subscribe(
	// 	 (user2: User)=>{
	//  this.usernameTaken = false;
	//  this.submitSuccess = true;
	// 	 });
	// }
	

// }


delete(){
	this.userService.deleteUser(this.uid).subscribe(
		user =>{
			this.router.navigate(['user/' + this.uid])
		}
	)
}
}