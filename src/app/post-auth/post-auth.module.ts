import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAuthRoutingModule } from './post-auth-routing.module';
import { PostauthComponent } from './postauth.component';
import {SharedModule} from '../shared/shared.module'



@NgModule({
  declarations: [PostauthComponent],
  imports: [
    CommonModule,
    PostAuthRoutingModule,
    SharedModule
  ],
})
export class PostAuthModule { }
