import { Component, OnInit } from '@angular/core';
import { SharedService} from "../../services/shared.service.client";
import { User } from '../../models/user.model.client';
import { PostsService} from "../../services/postings.service.client";


@Component({
  selector: 'app-posting-description',
  templateUrl: './posting-description.component.html',
  styleUrls: ['./posting-description.component.css']
})
export class postingDescriptionComponent implements OnInit {
uid:string;
user: User;
carts: string;
  constructor( private postService:PostsService, private sharedService: SharedService) { }

  ngOnInit() {
  	this.sharedService.user = this.user;
  	this.uid = this.user._id;

  	this.postService.findShoppingItem('321').subscribe(
      (data:any ) =>{
        this.carts = data;
      
      }
      )
  	
  }

}
