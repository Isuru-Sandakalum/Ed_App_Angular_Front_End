import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthTService {

  loginStatusTeacher= new Subject();
  constructor(private httpClient:HttpClient) { }


  login(teacherUserRq:any){

    this.httpClient.post('http://localhost:8080/teacher/getLoggedUserTeacher',teacherUserRq)
      .subscribe((userDetailsT)=>{
        console.log("userDetailsTeacher",userDetailsT);

        if(userDetailsT != null){
          this.loginStatusTeacher.next(userDetailsT)
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
