import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PollComponent } from './poll/poll.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
{
  path:'',
  component:LandingComponent,
},
{
  path:'dashboard',
  component:DashboardComponent,
},
{
  path:'create',
  component:CreateComponent
},
{
  path:'poll',
  component:PollComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
