import { Component, OnInit } from '@angular/core';
import { ShoppingService} from "../../services/shopping.service.client";
import { UserService } from '../../services/user.service.client';
import { SharedService} from "../../services/shared.service.client";
import { PostsService} from "../../services/postings.service.client";
import { User } from '../../models/user.model.client'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

counter: number;
user:User;
uid: string;
posts: string;
  constructor(private postingService: PostsService, private shoppingService: ShoppingService, private userService:UserService, private sharedService: SharedService) { }



  ngOnInit() {
  	this.sharedService.user = this.user
    // this.uid = this.user._id;
    this.uid ='321'

this.counter = this.shoppingService.counter

this.postingService.findShoppingItem('321').subscribe(
  (data:any ) =>{
    this.posts = data;
  
  }
)

  }




}
