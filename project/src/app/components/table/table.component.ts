import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {Router} from "@angular/router";
import {CourseEditService} from "../../services/course-edit.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  courses: any = [];

  constructor(private  courseService: CourseService, private router: Router, private courseEdit: CourseEditService,private form:FormBuilder) {
  }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(courses);
    });


  }


  addEditCourse(course: any) {
    if (course != null) {
      console.log(course);
      sessionStorage.setItem("courseID", course.courseId)
    } else {
      sessionStorage.removeItem("courseID")
    }

    this.router.navigate(["/form"])
  }

  delete(courses: any) {
    this.courseEdit.deleteCourse(courses);
  }

}
