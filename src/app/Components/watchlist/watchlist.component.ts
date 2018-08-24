import { Component, OnInit } from '@angular/core';
import { ShoppingService} from "../../services/shopping.service.client";
import { PostsService} from "../../services/postings.service.client";
import {Post } from '../../models/posting.model.client';
import { SharedService} from "../../services/shared.service.client";
import { User } from '../../models/user.model.client'
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
counter: number;
posts:Post;
user: User;
carts:string;
uid:string;
  constructor(private sharedService: SharedService,private shoppingService: ShoppingService, private postService: PostsService) { }

  ngOnInit() {
    this.counter = this.shoppingService.counter;
    this.sharedService.user = this.user;
    this.uid = this.user._id;
    
    this.postService.findShoppingItem('321').subscribe(
      (data:any ) =>{
        this.carts = data;
      
      }
      )

    this.postService.findWatchItem().subscribe(
      (data: Post) =>{
    this.posts = data;
  console.log(this.posts)
  }

    )
}

}