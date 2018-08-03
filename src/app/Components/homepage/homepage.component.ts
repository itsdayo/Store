import { Component, OnInit } from '@angular/core';
import { ShoppingService} from "../../services/shopping.service.client"
import { ItemsService} from "../../services/items.service.client"

declare var $:any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

counter: number;
items: any;
  constructor(private shoppingService: ShoppingService, private itemsService: ItemsService) { }

 ngOnInit() {
 	this.counter = this.shoppingService.counter
 	this.itemsService.findItem().subscribe(
 		data =>{
 			data = this.items
 			console.log(data)
 		})

  }


add(){
this.counter = this.shoppingService.counter

}
}