import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import {IUser} from '../models/user.interface'

@Injectable({providedIn : 'root'})

export class TestService {

    url = "https://jsonplaceholder.typicode.com/posts"
    constructor(private http:HttpClient){}

    public doTest(){
        console.log("Called")
       return this.http.get<IUser[]>(this.url)
    }
}