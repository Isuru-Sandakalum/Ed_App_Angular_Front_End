import {Component, OnInit} from '@angular/core';
import {StudentAddEditService} from "../../services/student-add-edit.service";

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.scss']
})
export class OverViewComponent implements OnInit{
  constructor(private st:StudentAddEditService){}

  users :any

  ngOnInit(): void {
    this.st.getAllUsers().subscribe((users)=>{
      this.users = users;
    })
  }

}
