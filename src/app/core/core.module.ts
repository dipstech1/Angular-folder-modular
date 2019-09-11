import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { TestService } from '../core/services/test.service'
import { SharedModule } from '../shared/shared.module'
import { LoaderInterceptor } from './interceptors/loading.interceptor';
import { LoaderService } from './services/loader.service';
import { HttpConfigInterceptor } from './interceptors/http.interceptor';
import { DataService } from './services/data-sharing.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule, // name of this module
      providers: [
        TestService, 
        LoaderService,
        DataService, 
        { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
      ] 
    };
  }
}
