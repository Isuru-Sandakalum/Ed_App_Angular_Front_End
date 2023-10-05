import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartupComponent} from "./components/startup/startup.component";
import {SigninComponent} from "./components/signin/signin.component";
import {HomeComponent} from "./components/home/home.component";
import {SignupComponent} from "./components/signup/signup.component";
import {CartViewComponent} from "./components/cart-view/cart-view.component";
import {AdminLayOutComponent} from "./components/admin-lay-out/admin-lay-out.component";
import {JobPageComponent} from "./components/job-page/job-page.component";
import {NFormComponent} from "./components/n-form/n-form.component";
import {CourseEditService} from "./services/course-edit.service";
import {PrivacyComponent} from "./components/privacy/privacy.component";
import {PaymentComponent} from "./components/payment/payment.component";
import {MyCComponent} from "./components/my-c/my-c.component";
import {TermsComponent} from "./components/terms/terms.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'startup',
    pathMatch: 'full'

  },
  {path: 'signin', component: SigninComponent},
  {path: 'addToCart', component: CartViewComponent},
  {path: 'startup', component: StartupComponent},
  {path: 'home', component: HomeComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'payment',component:PaymentComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admin', component: AdminLayOutComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'my', component: MyCComponent},
  {
    path: 'form',
    component: NFormComponent,
    resolve:{
      data: CourseEditService
    }
  },
  {path: 'job', component: JobPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
