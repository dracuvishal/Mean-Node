import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared.route';
import { SingleDataViewComponent } from './single-data-view/single-data-view.component';
import { AdminTableComponent, ActionDialog } from './admin-table/admin-table.component';


@NgModule({
  declarations: [SingleDataViewComponent, AdminTableComponent,ActionDialog],
  imports: [
    AppMaterialModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  entryComponents: [
    ActionDialog
  ],
  exports:[
    SingleDataViewComponent,
    AdminTableComponent 
  ]
})
export class SharedModule { }
