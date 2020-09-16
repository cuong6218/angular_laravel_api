import { AuthGuard } from './guards/auth.guard';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { RegisterComponent } from './layout/register/register.component';
import { LoginComponent } from './layout/login/login.component';
import { MasterComponent } from './layout/master/master.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full'},
  {path: '', redirectTo: 'admin/dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: MasterComponent,
  children: [ 
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'users', loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
