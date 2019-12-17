import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/routergaurd/router.service';


const routes: Routes = [


  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule),
    canActivate:[AuthGuardService]
  },
  {
    path:'shared',
    loadChildren:()=>import('./shared/shared.module').then(mod=>mod.SharedModule),
    canActivate:[AuthGuardService]
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
