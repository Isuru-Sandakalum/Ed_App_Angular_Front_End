import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {CartService} from "../../services/cart.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {


  courses:any;

  constructor(private courseService: CourseService, private cartService:CartService) {
  }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((course)=>{
      //console.log("courses",course)
      this.courses = course;

      this.courses.forEach((a:any)=>{
          Object.assign(a,{quantity:1,total:a.coursePrice})
      });
    })
  }

  addToCart(courses:any){
      this.cartService.addCart(courses);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Item added to the cart',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

