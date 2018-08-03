import { Component, OnInit } from '@angular/core';
import { ShoppingService} from "../../services/shopping.service.client";
import { UserService } from '../../services/user.service.client';
import { SharedService} from "../../services/shared.service.client";
import { User } from '../../models/user.model.client'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

counter: number;
user:User;
  constructor(private shoppingService: ShoppingService, private userService:UserService, private sharedService: SharedService) { }



  ngOnInit() {
  	this.sharedService.user = this.user
  	console.log(this.user)

this.counter = this.shoppingService.counter


  }




}
