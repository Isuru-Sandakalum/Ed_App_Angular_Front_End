import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-navbarfull',
  templateUrl: './navbarfull.component.html',
  styleUrls: ['./navbarfull.component.scss']
})
export class NavbarfullComponent implements OnInit{

  userDetails:any={};

  totalItem:number = 0;

  constructor(private router:Router,private cartService:CartService){}

  ngOnInit(): void {
    let user = sessionStorage.getItem('user')  || sessionStorage.getItem('teacher');

    if(user != null){
      this.userDetails = JSON.parse(user);
    }


    this.cartService.getProduct().subscribe((res:any)=>{
      this.totalItem = res.length;
    });

  }

  logout(){
    sessionStorage.removeItem('user',);
    sessionStorage.removeItem('teacher',);
  }

  cartBtn(){
    this.router.navigate(['/addToCart'])
  }


}
