import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loginStatus= new Subject();

  constructor(private httpClient:HttpClient) { }

  login(studentUserRq:any){

    this.httpClient.post('http://localhost:8080/students/getLoggedUser',studentUserRq)
      .subscribe((userDetails)=>{
        console.log("userDetails",userDetails);

        if(userDetails != null){
          this.loginStatus.next(userDetails)

        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: 'Check your password or username</>'
          })
        }
      })


  }
}

