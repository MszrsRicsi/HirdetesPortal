import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../interfaces/interfaces';
import { ApiService } from '../../services/api.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ){}
  user: User = {
    name: "",
    email: "",
    address: "",
    password: "",
    confirm: ""
  }

  login()
  {
    this.api.login(this.user).subscribe((res: any) => {
      if (res.success)
      {
        this.user = {
          name: "",
          email: "",
          address: "",
          password: "",
          confirm: ""
        }
        
        this.auth.Login(res.token);

        this.router.navigate(["/ads"]);
      }
    });
  }
}
