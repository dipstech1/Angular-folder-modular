import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

import {LoginResolver} from '../../core/services/resolvers/login.resolver'
import { PendingChangesGuard } from 'src/app/core/guards/deactivate.guard';


const routes: Routes = [
  {
    path : '',
    component : LoginComponent,
    resolve : {data : LoginResolver},
    canDeactivate: [PendingChangesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
