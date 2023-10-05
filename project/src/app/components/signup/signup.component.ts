import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {StudentDto} from "../../services/dto/student";
import {StudentAddEditService} from "../../services/student-add-edit.service";



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  student : StudentDto = new StudentDto();

  constructor(private router: Router, private formBuilder: FormBuilder,private studentService:StudentAddEditService) {
  }

  ngOnInit(): void {
  }


  signUpBtn() {
    console.log(this.student);
    this.studentService.saveStudent(this.student)
      .subscribe();
     this.router.navigate(['/startup'])

  }

}
