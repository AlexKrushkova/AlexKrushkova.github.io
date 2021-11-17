import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
