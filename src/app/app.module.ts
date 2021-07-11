import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './views/list/list.component';
import { NewLeadComponent } from './views/new-lead/new-lead.component';

import { NewLeadFormComponent } from './components/new-lead-form/new-lead-form.component';
import { LeadsListComponent } from './components/leads-list/leads-list.component';
import { AccessComponent } from './views/access/access.component';
import { CardLeadComponent } from './components/card-lead/card-lead.component';

import { AuthService } from './services/auth/auth.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    NewLeadComponent,
    NewLeadFormComponent,
    LeadsListComponent,
    AccessComponent,
    CardLeadComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
