import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../../services/user.service.client'
import { ShoppingService} from "../../services/shopping.service.client"
import { SharedService} from "../../services/shared.service.client"

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
  constructor(private sharedService: SharedService, private shoppingService: ShoppingService, private activatedRoute : ActivatedRoute, private userService: UserService) { }

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

	})

}
}