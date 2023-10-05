import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Resolve} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CourseService{

  private apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }


  getAllCourses():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/course/getAllCourses")

  }



}
