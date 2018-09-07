import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { CatComponent } from './components/cat.component';
import { DogComponent } from './components/dog.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'cat', component: CatComponent},
  { path: 'dog', component: DogComponent},
  //wildcard
  { path: '**', component: HomeComponent}
  // { path: '**',  redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class ApprouteModule { }
