import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseEditService} from "../../services/course-edit.service";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Course} from "../../services/dto/course";
import * as _ from 'underscore';
import {Router} from "@angular/router";

@Component({
  selector: 'app-n-form',
  templateUrl: './n-form.component.html',
  styleUrls: ['./n-form.component.scss']
})
export class NFormComponent implements OnInit, OnDestroy {
  constructor(private courseAddEdit: CourseEditService, private form: FormBuilder ,private router:Router) {
  }

  courseAddForm: FormGroup;
  course = new Course();
  pageType:string;
  pageType2:string;
  buttonType:string;

  onCourseChange = new Subscription();

  ngOnInit(): void {

    this.onCourseChange = this.courseAddEdit.course
      .subscribe((course) => {
        if (!_.isEmpty(course)) {
          this.course = new Course(course);
          this.pageType = 'Edit Course';
          this.pageType2 = 'or add new course';
          this.buttonType = 'Update';
        } else {
          this.course = new Course();
          this.pageType = 'Add Course';
          this.pageType2 = 'or edit existing course';
          this.buttonType ='Submit';
        }
        this.courseAddForm = this.createForm();
      })
  }

  ngOnDestroy(): void {
    this.onCourseChange.unsubscribe();
  }

  createForm() {
    return this.form.group({
      courseId: [this.course.courseId],
      courseName: [this.course.courseName,[Validators.required]],
      coursePrice: [this.course.coursePrice,[Validators.required]],
      description: [this.course.description,[Validators.required]],
      teacher: [this.course.teacher,[Validators.required]]
    })
  }

  saveData(){
    let data = this.courseAddForm.getRawValue();
    this.courseAddEdit.saveCourses(data);

  }

  clearData(){
    this.courseAddForm.reset();
  }

  get courseName(){
    return this.courseAddForm.get('courseName');
  }

  get coursePrice(){
    return this.courseAddForm.get('coursePrice');
  }

  get description(){
    return this.courseAddForm.get('description');
  }

  get teacher(){
    return this.courseAddForm.get('teacher');
  }
}
