import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {path: '',
  children: [
    {path: '', component: UserListComponent},
    {path: 'add', component: UserAddComponent},
    {path: ':id/update', component: UserUpdateComponent},
  ]}
];

@NgModule({
  declarations: [UserListComponent, UserAddComponent, UserUpdateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
