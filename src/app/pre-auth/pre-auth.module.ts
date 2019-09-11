import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreAuthRoutingModule } from './pre-auth-routing.module';
import { PreauthComponent } from './preauth.component';

import {SharedModule} from '../shared/shared.module'


@NgModule({
  declarations: [PreauthComponent],
  imports: [
    CommonModule,
    PreAuthRoutingModule,
    SharedModule,
  ]
})
export class PreAuthModule { }
