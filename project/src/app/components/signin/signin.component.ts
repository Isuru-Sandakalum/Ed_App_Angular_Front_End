import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthTService} from "../../services/auth-t.service";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthServiceService,
              private router: Router,
              private formBuilder: FormBuilder,
              private authT:AuthTService) {
  }

  ngOnInit(){

    this.authService.loginStatus.subscribe((userDetails) => {
      if (userDetails) {
        this.router.navigate(['/home']);
        sessionStorage.setItem('user',JSON.stringify(userDetails))
      }
    });



    this.authT.loginStatusTeacher.subscribe((userDetails)=>{

      if(userDetails){
        this.router.navigate(['/admin']);
        sessionStorage.setItem('teacher',JSON.stringify(userDetails))
      }

    });

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })






  }

  signEventStudent() {
    let rowData = this.loginForm.getRawValue();
    this.authService.login(rowData);
  }

  signEventTeacher() {
    let rowData = this.loginForm.getRawValue();
    this.authT.login(rowData);
  }


  signOut(){

  }

}
