import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { SurpriseBagsComponent } from './pages/surprise-bags/surprise-bags.component';
import { StoresComponent } from './pages/stores/stores.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ModalComponent } from './shared/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreDashboardComponent } from './store-admin/store-dashboard/store-dashboard.component';
import { BagsComponent } from './store-admin/bags/bags.component';
import { StoreRegistrationComponent } from './store-registration/store-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    SurpriseBagsComponent,
    StoresComponent,
    FooterComponent,
    ModalComponent,
    StoreDashboardComponent,
    StoreDashboardComponent,
    BagsComponent,
    StoreRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
