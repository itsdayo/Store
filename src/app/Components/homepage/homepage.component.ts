import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingService} from "../../services/shopping.service.client";
import { PostsService} from "../../services/postings.service.client"
import { SharedService} from "../../services/shared.service.client";
import { User } from "../../models/user.model.client";
import {Post } from '../../models/posting.model.client'
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as jQuery from 'jQuery'
declare var $:any;

	

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	@ViewChild('f') searchForm: NgForm
	
counter: number;
posts: Post;
user:User; 
uid: string;
name:string;
carts: string;

inputName: string = "";
  constructor(private activatedRoute : ActivatedRoute, private router: Router, private postService: PostsService, private sharedService: SharedService, private shoppingService: ShoppingService, private postsService: PostsService) { }
	
 ngOnInit() {
	 this.activatedRoute.params.subscribe( params =>
		this.uid = params['uid']	 
	 )
 	this.inputName = "";
	this.user = this.sharedService.user;
	console.log(this.user);

	this.postService.findShoppingItem('321').subscribe(
		(data:any ) =>{
		  this.carts = data;
		
		}
	  )

this.postService.findPost().subscribe(
	(data: Post) =>{
this.posts = data;
console.log(this.posts)
	}
	
)
 	this.counter = this.shoppingService.counter
 	// this.postsService.findPost().subscribe(
 	// 	data =>{
 	// 		this.posts = data  
 	// 	})
this.sharedService.user = this.user;
this.uid = this.user._id;

  }

ngOnChanges(){

}

add(){
this.counter = this.shoppingService.counter
}

searching(){
	this.name = this.searchForm.value.searchBar
this.postService.findPostbyTitle(name).subscribe(
	(data:any) =>{
this.posts = data;
console.log(data);
	}
)
}

AddtoCartList(post){
	this.postService.AddShoppingCart(post).subscribe(
		(data :any)=>{
			console.log(data)
			
	this.shoppingService.counterClick()
// this.router.navigate(['/sell'])
		}
			

		
	)
}
AddtoWatchList(post){
	this.postService.AddWatchList(post).subscribe(
		(data :any)=>{
this.router.navigate(['/watching'])
		}
	)
}
}