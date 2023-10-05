import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import Swal from "sweetalert2";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StudentDto} from "../../services/dto/student";
import {Payment} from "../../services/dto/payment";
import {PaymentServiceService} from "../../services/payment-service.service";
import {Subscription} from "rxjs";
import * as _ from 'underscore';
import {Course} from "../../services/dto/course";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  product: any = [];
  grandTotal: number = 0;
  isVisible: boolean = true;
  paymentForm: FormGroup;
  payment = new Payment();

  onPaymentChange = new Subscription();

  constructor(private cartService: CartService, private router: Router, private formBuilder: FormBuilder, private paymentS: PaymentServiceService) {
  }

  ngOnInit(): void {
    this.cartService.getProduct()
      .subscribe((res: any) => {
        this.product = res;
        this.grandTotal = this.cartService.getTotalPrice();
      });


    this.onPaymentChange = this.paymentS.payment.
    subscribe((payment) => {
      
      if (!_.isEmpty(payment)) {
        this.payment = new Payment(payment);
      }else{
        this.payment = new Payment();
      }
      this.paymentForm = this.createForm();
    });
  }

  createForm() {
    return this.formBuilder.group({
      paymentId:[this.payment.paymentId],
      fullName:[this.payment.fullName,[Validators.required]],
      email:[this.payment.email,[Validators.required]],
      address:[this.payment.address,[Validators.required]],
      city:[this.payment.city,[Validators.required]],
      district:[this.payment.district,[Validators.required]],
      postalCode:[this.payment.postalCode,[Validators.required]],
      cardName:[this.payment.cardName,[Validators.required]],
      number:[this.payment.number,[Validators.required]],
      exMonth:[this.payment.exMonth,[Validators.required]],
      exYear:[this.payment.exYear,[Validators.required]],
      cvv:[this.payment.cvv,[Validators.required]]
  })
  }

  checkout() {

    let data = this.paymentForm.getRawValue();
    this.paymentS.addPayment(data);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Payment has success',
      showConfirmButton: false,
      timer: 1500
      // }).then(function () {
      // location.pathname="/my"
    });
    this.isVisible = !this.isVisible;

  }


  get fullName(){
     return this.paymentForm.get("fullName");
  }

  get email(){
    return this.paymentForm.get("email");
  }

  get address(){
    return this.paymentForm.get("address");
  }

  get city(){
    return this.paymentForm.get("city");
  }

  get district(){
    return this.paymentForm.get("district");
  }

  get postalCode(){
    return this.paymentForm.get("postalCode");
  }

  get cardName(){
    return this.paymentForm.get("cardName");
  }

  get number(){
    return this.paymentForm.get("number");
  }

  get exMonth(){
    return this.paymentForm.get("exMonth");
  }

  get exYear(){
    return this.paymentForm.get("exYear");
  }

  get cvv(){
    return this.paymentForm.get("cvv");
  }

  reset(){
    this.paymentForm.reset();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Form has been cleared',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
