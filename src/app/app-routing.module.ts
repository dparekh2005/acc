import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {NewTransactionComponent} from "./new-transaction/new-transaction.component";
import {ViewSubmittedTransactionComponent} from "./view-submitted-transaction/view-submitted-transaction.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {MultiFormComponent} from "./multi-form/multi-form.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: "full"
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'new-transaction',
    component: NewTransactionComponent
  },
  {
    path: 'view-submitted-transaction',
    component: ViewSubmittedTransactionComponent
  },
  {
    path: 'userprofile',
    component: UserProfileComponent
  },
  {
    path: 'multi',
    component: MultiFormComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
