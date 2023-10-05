import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarfullComponent } from './components/navbarfull/navbarfull.component';
import { StartupComponent } from './components/startup/startup.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { Section1Component } from './components/section1/section1.component';
import { SigninComponent } from './components/signin/signin.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {SignupComponent} from "./components/signup/signup.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import { MainComponent } from './components/main/main.component';
import { JobPageComponent } from './components/job-page/job-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HomeTComponent } from './components/home-t/home-t.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { AdminLayOutComponent } from './components/admin-lay-out/admin-lay-out.component';
import { TableComponent } from './components/table/table.component';
import { OverViewComponent } from './components/over-view/over-view.component';
import { MyCComponent } from './components/my-c/my-c.component';
import { NFormComponent } from './components/n-form/n-form.component';
import { SearchBar2Component } from './components/search-bar2/search-bar2.component';
import { FooterLightComponent } from './components/footer-light/footer-light.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavbarfullComponent,
    StartupComponent,
    SearchbarComponent,
    HomeComponent,
    CardsComponent,
    Section1Component,
    SigninComponent,
    SignupComponent,
    MainComponent,
    JobPageComponent,
    HomeTComponent,
    CartViewComponent,
    AdminLayOutComponent,
    TableComponent,
    OverViewComponent,
    MyCComponent,
    NFormComponent,
    SearchBar2Component,
    FooterLightComponent,
    PaymentComponent,
    PrivacyComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
