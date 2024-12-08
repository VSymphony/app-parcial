import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-profile',
  imports: [MaterialModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  welcomeMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem('authToken');
    const username = sessionStorage.getItem('username');

    if (!token) {
      this.router.navigate(['/login']);
    } else {
      const capitalizedUsername = this.capitalizeFirstLetter(username || '');
      this.welcomeMessage = `Bienvenido, ${capitalizedUsername}, este es tu perfil...!!!`;
    }
  }

  private capitalizeFirstLetter(name: string): string {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
}
