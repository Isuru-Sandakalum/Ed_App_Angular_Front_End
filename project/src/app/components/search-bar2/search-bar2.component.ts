import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-search-bar2',
  templateUrl: './search-bar2.component.html',
  styleUrls: ['./search-bar2.component.scss']
})
export class SearchBar2Component implements OnInit{

  courseSearchForm : FormGroup;
  constructor(private router:Router,private form:FormBuilder,private courseService:CourseService) {
  }

  ngOnInit(): void {
    this.courseSearchForm = this.form.group({
      studentName:[''],
      teacher:['']
    });
  }

  // onSearch(){
  //   let data = this.courseSearchForm.getRawValue();
  //   this.courseService.getAllCourse(data);
  // }

}
