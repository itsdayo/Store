import { Component, OnInit } from '@angular/core';
import { ShoppingService} from "../../../services/shopping.service.client";
import { SharedService} from "../../../services/shared.service.client";
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
counter: number;
  constructor(private shoppingService: ShoppingService, private sharedService: SharedService) { }

  ngOnInit() {
  	this.counter = this.shoppingService.counter
  }

}
