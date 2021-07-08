import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { NewLeadComponent } from './components/new-lead/new-lead.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'novo', component: NewLeadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
