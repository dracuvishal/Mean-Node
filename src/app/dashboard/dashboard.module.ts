import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard.route';
import { AdminDashboardComponent, ProductDialog } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [ContentComponent, AdminDashboardComponent,ProductDialog],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents:[ProductDialog]
})
export class DashboardModule { }
