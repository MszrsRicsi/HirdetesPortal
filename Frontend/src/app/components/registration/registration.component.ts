import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../interfaces/interfaces';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  constructor(
    private api: ApiService,
    private router: Router
  ){}

  user: User = {
    name: "",
    email: "",
    address: "",
    password: "",
    confirm: ""
  }
  
  register()
  {
    this.api.registration(this.user).subscribe((res: any) => {
      if (res.success)
      {
        this.user = {
          name: "",
          email: "",
          address: "",
          password: "",
          confirm: ""
        }

        this.router.navigate(["/login"]);
      }
    });
  }
}
