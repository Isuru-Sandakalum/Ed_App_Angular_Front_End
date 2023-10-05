import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit{

  product:any = [];
  grandTotal : number = 0;

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartService.getProduct()
      .subscribe((res : any)=>{
        this.product = res;
        this.grandTotal = this.cartService.getTotalPrice();
      });
  }

  removeCartItem(item:any){
    this.cartService.removeCartItem(item);
  }

  removeAll(){
    this.cartService.removeAllCart();
  }



}
