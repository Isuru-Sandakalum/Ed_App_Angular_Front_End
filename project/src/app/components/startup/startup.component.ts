import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit{

  constructor( private router: Router){}

  ngOnInit(): void {
  }

  navigate(){
      this.router.navigate(['/start/signin']);
  }
}
