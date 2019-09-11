import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactComponent } from './contact/contact.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCDS6QBz_7Cp-ZYUTVZMty_p9xSUefC8Eg"
    }),
  ]
})
export class ContactUsModule { }
