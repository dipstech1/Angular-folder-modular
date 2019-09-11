import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from '../app/shared/shared.module'
import { AppComponent } from './app.component';

import {PreAuthModule} from '../app/pre-auth/pre-auth.module'
import {PostAuthModule} from '../app/post-auth/post-auth.module'
import {CoreModule} from '../app/core/core.module'


import {PendingChangesGuard} from '../app/core/guards/deactivate.guard'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
  
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PreAuthModule,
    PostAuthModule,
    SharedModule,
    CoreModule.forRoot(),
    ToastrModule.forRoot(),
   
  ],
  providers: [
    PendingChangesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
