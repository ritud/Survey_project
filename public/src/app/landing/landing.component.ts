import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

name="";
  constructor(private _taskService:TaskService,private _router:Router) { }

  ngOnInit() {
  }

submit(){
  //Storing the user name in service
  this._taskService.Set_name(this.name);
  this._router.navigate(['dashboard']);
}
}
