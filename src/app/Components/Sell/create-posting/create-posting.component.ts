import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Post } from '../../../models/posting.model.client'
import { PostsService} from "../../../services/postings.service.client";
import { Router }  from '@angular/router'
import { SharedService} from "../../../services/shared.service.client";
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-create-posting',
  templateUrl: './create-posting.component.html',
  styleUrls: ['./create-posting.component.css']
})
export class CreatePostComponent implements OnInit {

@ViewChild('f') postingForm: NgForm


uid: string;
iid: string;
title: string;
description: string;
shipping: string;
price: number;
sellorId:string;
url1:string;
url2:string;
url3:string;
carts:string;

  constructor(private router: Router, private postingService:PostsService, private sharedService: SharedService ) { }
 baseUrl = environment.baseUrl;
  ngOnInit() {

	this.postingService.findShoppingItem('321').subscribe(
		(data:any ) =>{
		  this.carts = data;
		
		}
	  )
  }


create(){
	this.title = this.postingForm.value.name;
	this.description = this.postingForm.value.description;
	this.shipping = this.postingForm.value.shipping;
	this.price = this.postingForm.value.price;
	this.url1 = this.postingForm.value.url1;
	this.url2 = this.postingForm.value.url2;
	this.url3 = this.postingForm.value.url3;
	const newPosting: Post ={
		uid: this.uid,
		title: this.title,
		description: this.description,
		shipping: this.shipping,
		price: this.price
	} 

	this.postingService.createPost(newPosting).subscribe(
    (post: Post)=>{
      this.router.navigate([''])
    })
	

}
}



