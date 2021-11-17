import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { MaterialModule } from '../material.module';
import { UserSingleComponent } from './user-single/user-single.component';


@NgModule({
  declarations: [UsersListComponent, UserSingleComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
  ],
  exports:[
  ]
})
export class UsersModule { }
