import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {StudentDto} from "./dto/student";
import {Payment} from "./dto/payment";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService implements OnInit {

  payment = new BehaviorSubject({});

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  addPayment(data: any) {
    this.http.post('http://localhost:8080/payment/addPayment',data).subscribe((payment) => {
      this.payment.next(payment);
    });
  }

}
