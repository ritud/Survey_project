import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Router } from "@angular/router";

@Injectable()
export class TaskService {
current_user="";
surveys=[];
survey=null;
  constructor(private _http:Http,private _router:Router) { }

  Set_name(name){
    this.current_user=name;
    console.log("Current user is "+ this.current_user);
  }
  get_name(){
    return this.current_user;
  }
  create(data){
    this._http.post('/create',data).subscribe(
      (response)=>
      {
        console.log("A survey question craeted sucessfully");
        this._router.navigate(['dashboard']);
      },
    (err)=>{
      console.log("Some error while creating question");
      })
  }
  get_Surveys(callback){
    this._http.get('/getsurveys').subscribe(
      (response)=>
      {
        this.surveys=response.json();
        console.log("IN SERVICE GETTING SURVEYS"+this.surveys);
        callback(this.surveys);
      },
      (err)=>
      {
        console.log("You got an error while getting the data");
      }
    )
  }
  getSurvey(id){
    this._http.get('/survey/'+id).subscribe(
      (response)=>
      {
        this.survey=response.json();
        this._router.navigate(['/poll']);
      },
      (err)=>
      {
        console.log("Some error occured while getting the survey");
      }
    )}

  deleteSurvey(id,callback){
  this._http.delete('/deletesurvey/'+id).subscribe(
    (response)=>{
      this.surveys=response.json();
      callback(this.surveys);
      console.log("DELETE Successful"+this.surveys);
      this._router.navigate(['/dashboard']);
    },
    (err)=>{
      console.log("DELETE Unsuccessful");
    }
  )
  }

  updatevote(survey){
    this._http.put('/update',survey).subscribe(
      (response)=>{
        console.log("UPDATE SUCCESSFUL");
        this.getSurvey(survey._id);
      },
      (err)=>{
        console.log("ERROR IN UPDATING");
      }
    )
  }
}
