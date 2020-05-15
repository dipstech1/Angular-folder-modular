import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FooterComponent} from '../shared/layouts/footer/footer.component'
import {HeaderComponent} from '../shared/layouts/header/header.component';
import { LoaderComponent } from './components/loader/loader.component'
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { ConfirmPopupComponent } from './components/confirm-popup/confirm-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxTypeaheadModule } from 'ngx-typeahead';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, LoaderComponent,NavbarComponent, ConfirmPopupComponent],
  entryComponents:[ConfirmPopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    TypeaheadModule.forRoot(),
    RouterModule,
    NgxTypeaheadModule
  ],
  exports : [FooterComponent,HeaderComponent,LoaderComponent,NavbarComponent,ConfirmPopupComponent,ModalModule,ReactiveFormsModule,FormsModule,TypeaheadModule]
})
export class SharedModule { }
