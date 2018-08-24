import { Component, OnInit } from '@angular/core';
import { SharedService} from "../../services/shared.service.client";
import { PostsService} from "../../services/postings.service.client";
import { User } from '../../models/user.model.client'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
user: User;
carts:string;
uid: string;
  constructor(private sharedService: SharedService, private postService: PostsService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.uid = this.user._id;
    console.log(this.uid)
    this.postService.findShoppingItem('321').subscribe(
      (data:any ) =>{
        this.carts = data;
      
      }
      )
  }

}
