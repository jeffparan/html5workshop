import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films.component';
import { FilmsDetailsComponent } from './components/films-details.component';

const ROUTES: Routes = [
  { path: '', component: FilmsComponent},
  { path: 'films', component: FilmsComponent},
  { path: 'films/:fid', component: FilmsDetailsComponent},
   //wildcard
  { path: '**', component: FilmsComponent}
  // { path: '**',  redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }
