import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';

import {PreauthComponent} from '../app/pre-auth/preauth.component'
import {PostauthComponent} from '../app/post-auth/postauth.component'

import {AuthGuard} from '../app/core/guards/auth.guard'
import {LoginGuard} from '../app/core/guards/login.guard'


const routes: Routes = [
  {
    path : '',
    component : PreauthComponent,
    canActivate : [LoginGuard],
    loadChildren : () => import('../app/pre-auth/pre-auth.module').then(m => m.PreAuthModule)
  },
  {
    path : 'emp',
    component : PostauthComponent,
    canActivate : [AuthGuard],
    loadChildren : () => import('../app/post-auth/post-auth.module').then(m => m.PostAuthModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
