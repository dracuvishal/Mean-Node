import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleDataViewComponent } from './single-data-view/single-data-view.component';
import { ActionDialog } from './admin-table/admin-table.component';


const routes: Routes = [

  {
    path:'',
    redirectTo:'/singleView',
    pathMatch:'full'
  },
  {
    path: 'singleView',
    component:SingleDataViewComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
