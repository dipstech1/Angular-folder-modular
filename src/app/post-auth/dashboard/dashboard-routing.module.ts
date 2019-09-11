import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginResolver } from 'src/app/core/services/resolvers/login.resolver';


const routes: Routes = [
  {
    path : "",
    component : DashboardComponent,
    resolve : {data : LoginResolver},

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
