import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { AddVineComponent } from './vine/add-vine/add-vine.component';
import { VineComponent } from './vine/vine.component';

const routes: Routes = [
  {path: 'wines', component: VineComponent},
  {path: 'wines/about', component: AboutComponent},
  {path: 'wines/home', component: HomeComponent},
	{path: 'wines/add', component: AddVineComponent},
  {path: 'wines/:id', component: AddVineComponent},
	{path: '', redirectTo: '/wines/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
