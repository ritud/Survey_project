import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  search_content='';
  surveys=[];
  constructor(private _taskService:TaskService) {
    this._taskService.get_Surveys((surveys)=>
    {
    this.surveys=surveys;
    }
  )}

  ngOnInit() {}
  getSurvey(id){
    this._taskService.getSurvey(id);
  }
  deleteSurvey(id){
  this._taskService.deleteSurvey(id,(surveys)=>{
    this.surveys=surveys;
  });

  }
}
