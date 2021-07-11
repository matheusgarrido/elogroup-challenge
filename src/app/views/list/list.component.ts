import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private authService: AuthService) {
    document.title = 'EloGroup | Painel de Leads';
    this.authService.redirectIfNotAuth();
  }
}
