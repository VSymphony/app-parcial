import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor( private router: Router, private route: ActivatedRoute, private authService: AuthService) { 

  }

  irOpcionHome() {
    this.router.navigate(['home'], {relativeTo: this.route})
  }

  irOpcionProfile() {
    this.router.navigate(['profile'], {relativeTo: this.route})
  }

 

  logout() {
    this.authService.logout()
    this.router.navigate(['login'])
  }

}
