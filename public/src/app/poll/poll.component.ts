import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
survey=null;
  constructor(private _taskService:TaskService)
  {
  this.survey=this._taskService.survey;
  console.log(this.survey);
  }

  ngOnInit() {
  }
  increment(option){
    if(option=="vote1"){
      this.survey.vote1++;
    }
    if(option=="vote2"){
      this.survey.vote2++;
    }
    if(option=="vote3"){
      this.survey.vote3++;
    }
    if(option=="vote4"){
      this.survey.vote4++;
    }
    this._taskService.updatevote(this.survey);
  }
}
