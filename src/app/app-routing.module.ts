import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { NewLeadComponent } from './views/new-lead/new-lead.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'novo', component: NewLeadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
