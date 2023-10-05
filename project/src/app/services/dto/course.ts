export class Course {
  courseId;
  courseName;
  coursePrice;
  description;
  teacher;

  constructor(course?:any){
    course = course || {};
    this.courseId = course.courseId || null;
    this.courseName = course.courseName || null;
    this.coursePrice = course.coursePrice || '';
    this.description = course.description || '';
    this.teacher = course.teacher || '';
  }
}
