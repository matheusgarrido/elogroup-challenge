import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-new-lead',
  templateUrl: './new-lead.component.html',
  styleUrls: ['./new-lead.component.scss'],
})
export class NewLeadComponent {
  constructor(private authService: AuthService) {
    this.authService.redirectIfNotAuth();
  }
}