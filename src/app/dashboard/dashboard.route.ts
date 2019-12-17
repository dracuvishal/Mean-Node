import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [

  {
    path:'',
    redirectTo:'/content',
    pathMatch:'full'
  },
  {
    path: 'content',
    component:ContentComponent
  },
  {
    path:'admincontent',
    component:AdminDashboardComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
