import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreDashboardComponent } from './store-dashboard/store-dashboard.component';
import { BagsComponent } from './bags/bags.component';

const routes: Routes = [
  { path: '', component: StoreDashboardComponent },
  { path: 'bags', component: BagsComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreAdminRoutingModule { }
