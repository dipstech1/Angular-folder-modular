import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSectionRoutingModule } from './profile-section-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';




@NgModule({
  declarations: [ProfileComponent, EditProfileComponent],
  imports: [
    CommonModule,
    ProfileSectionRoutingModule,
   
  ]
})
export class ProfileSectionModule { }
