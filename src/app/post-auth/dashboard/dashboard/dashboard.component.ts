import { Component, OnInit, OnDestroy } from '@angular/core';
import {TestService} from '../../../core/services/test.service'
import { IUser } from 'src/app/core/models/user.interface';
import { ActivatedRoute } from '@angular/router';

import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmPopupComponent } from 'src/app/shared/components/confirm-popup/confirm-popup.component';
import { DataService } from 'src/app/core/services/data-sharing.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, OnDestroy {
  userData: any = [];
  bsModalRef: BsModalRef;
  unsubscribe = new Subject();

  selectedData:any

  constructor(private testService : TestService, private activatedRoute : ActivatedRoute, private modalService: BsModalService, private dataService:DataService) { }

  ngOnInit() {
    this.userData = this.activatedRoute.snapshot.data as IUser[]
    this.userData = this.userData.data
    this.dataService.confirmStatus
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((res:any) => {
      console.log(res);
      let {reason} =res;
      if(res.confirm){
          if(reason == "Delete"){
            let index = this.userData.findIndex(x => x.id == this.selectedData.id);
            this.userData.splice(index,1)
          }
      }
    })
  }

  takeAction(e:any, reason:string){
    const initialState = {
      title: reason,
      display: `Do you want to ${reason} ${e.title}`
    };
    this.bsModalRef = this.modalService.show(ConfirmPopupComponent,{initialState});
    this.selectedData = {...e}
  }

  ngOnDestroy(){
     this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
