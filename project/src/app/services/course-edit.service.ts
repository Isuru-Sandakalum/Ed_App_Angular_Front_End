import {Injectable} from '@angular/core';
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseEditService implements Resolve<any> {

  course = new BehaviorSubject({});
  private apiUrl = 'http://localhost:8080/course/deleteCourseById';

  constructor(private http: HttpClient) {
  }

  resolve(): Observable<any> | Promise<any> | any {
    this.getCourseById()
  }


  getCourseById() {
    let courseId = sessionStorage.getItem("courseID");
    if (courseId != null) {
      this.http.get(`http://localhost:8080/course/getCourseById/${courseId}`)
        .subscribe((course) => {
          this.course.next(course);
        });
    } else {
      this.course.next({});
    }
  }

  saveCourses(data: any) {
    this.http.post('http://localhost:8080/course/saveAndUpdateCourse', data).subscribe((course) => {
      this.course.next(course);
    });
  }


  deleteCourse(cId: any) {
    this.http.delete("http://localhost:8080/course/deleteCourseById"+"/"+cId).subscribe((res)=>{
      alert("Course Deleted");
      location.reload();
    });
  }


}
