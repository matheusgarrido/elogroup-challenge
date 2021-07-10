import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './views/list/list.component';
import { NewLeadComponent } from './views/new-lead/new-lead.component';

import { NewLeadFormComponent } from './components/new-lead-form/new-lead-form.component';
import { LeadsListComponent } from './components/leads-list/leads-list.component';
import { AccessComponent } from './views/access/access.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    NewLeadComponent,
    NewLeadFormComponent,
    LeadsListComponent,
    AccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
