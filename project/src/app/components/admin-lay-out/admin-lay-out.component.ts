import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-admin-lay-out',
  templateUrl: './admin-lay-out.component.html',
  styleUrls: ['./admin-lay-out.component.scss']
})
export class AdminLayOutComponent implements OnInit{

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

}
