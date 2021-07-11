import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { NewLeadComponent } from './views/new-lead/new-lead.component';
import { AccessComponent } from './views/access/access.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'novo', component: NewLeadComponent },
  { path: 'registro', component: AccessComponent, data: { page: 'registro' } },
  { path: 'login', component: AccessComponent, data: { page: 'login' } },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
