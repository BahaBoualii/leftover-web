import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { StoresComponent } from './pages/stores/stores.component';
import { SurpriseBagsComponent } from './pages/surprise-bags/surprise-bags.component';
import { RoleGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '',
    component: LandingComponent 
  },
  { path: 'register', 
    component: RegisterComponent
  },
  { path: 'login', 
    component:LoginComponent
  },
  { 
    path: 'admin/dashboard', 
    //to be changed
    component: LandingComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'admin' }
  },
  { 
    path: 'store-admin/dashboard', 
    //to be changed 
    component: LandingComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'store_admin' }
  },
  { 
    path: 'stores', 
    component: StoresComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'user' }
  },
  { path: 'surprise-bags', 
    component: SurpriseBagsComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }