import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from 'src/app/core/services/data-sharing.service';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.sass']
})
export class ConfirmPopupComponent implements OnInit {

  modalRef: BsModalRef;
  message: string;
  title:string;
  display:string = "Are you sure for the action"
  constructor(private modalService: BsModalService, private dataService : DataService) {}

  @ViewChild('template',{static:true}) template 
  
  ngOnInit(){
    console.log("title ", this.display)
    this.openModal(this.template)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
    this.modalService.hide(1)
    this.dataService.popupStatus({confirm:true, reason:this.title});
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
    this.modalService.hide(1)
    this.dataService.popupStatus({confirm:false, reason:this.title});

  }

}
