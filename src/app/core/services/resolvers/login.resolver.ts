import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import {TestService} from '../test.service'

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';


@Injectable({providedIn : 'root'})

export class LoginResolver {

    constructor(private tstService: TestService){
    }

    resolve() {
        return this.tstService.doTest();
      }

    
}