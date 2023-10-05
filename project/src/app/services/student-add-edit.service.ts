import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {Observable} from "rxjs";
import {StudentDto} from "./dto/student";

@Injectable({
  providedIn: 'root'
})
export class StudentAddEditService {

  student = new Subject();
  constructor(private httpClient:HttpClient) { }

  saveStudent(student?:StudentDto): Observable<object>{
    return this.httpClient.post<object>(`http://localhost:8080/students/addStudent`,student);

  }

  getAllUsers():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/students/getAllStudents")

  }
}
