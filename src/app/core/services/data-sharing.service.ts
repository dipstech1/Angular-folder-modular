import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private confirmPopup = new BehaviorSubject({});
  confirmStatus = this.confirmPopup.asObservable();

  constructor() { }

  popupStatus(status: any) {
    this.confirmPopup.next(status)
  }

}