import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {
     
      sessionStorage.setItem('authToken', 'dummy-token');
      sessionStorage.setItem('username', this.username);
      this.router.navigate(['/dashboard/home']);
    }
  }
}
