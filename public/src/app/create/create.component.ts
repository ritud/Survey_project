import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  question="";
  option1="";
  option2="";
  option3="";
  option4="";


  constructor(private _taskService:TaskService,private _router:Router) { }

  ngOnInit() {
  }
  submit(){
    var uname=this._taskService.get_name();
    this._taskService.create({name:uname,question:this.question,option1:this.option1,option2:this.option2,option3:this.option3,option4:this.option4})
  }

}
