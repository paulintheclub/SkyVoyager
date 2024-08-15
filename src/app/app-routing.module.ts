import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchFlightsComponent} from "./pages/search-flights/search-flights.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {HeaderFooterGuard} from "./guards/header-footer.guard";
import {LoginComponent} from "./pages/login/login.component";
import {ProfileComponent} from "./pages/profile/profile.component";

const routes: Routes = [
  {path: '', redirectTo: '/search-flights', pathMatch: 'full'},
  { path: 'search-flights', component: SearchFlightsComponent, canActivate: [HeaderFooterGuard] },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
