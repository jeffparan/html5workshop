import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list.component';
import { AddPeopleComponent } from './components/add-people.component';
import { PeopleListDetailComponent } from './components/people-list-detail.component';

const ROUTES: Routes = [
  { path: '', component: PeopleListComponent},
  { path: 'people', component: PeopleListComponent},
  { path: 'add', component: AddPeopleComponent},
  { path: 'detail/:pid', component: PeopleListDetailComponent},
  //{ path: '**', component: PeopleListComponent}
  { path: '**',  redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class ApprouteModule { }
