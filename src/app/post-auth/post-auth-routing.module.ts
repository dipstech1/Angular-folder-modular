import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"",
    loadChildren : () => import("../post-auth/dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {
    path:"profile",
    loadChildren : () => import("../post-auth/profile-section/profile-section.module").then(m=>m.ProfileSectionModule)
  },
  {
    path:'contact',
    loadChildren:() =>import("../post-auth/contact-us/contact-us.module").then(m=>m.ContactUsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostAuthRoutingModule { }
