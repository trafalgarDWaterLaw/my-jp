import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard.module/dashboard.component/dashboard.component';
import { ProfileComponent } from './profile.module/profile.component/profile.component';
// import { InvestigationModule } from './investigation/investigation.module';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
