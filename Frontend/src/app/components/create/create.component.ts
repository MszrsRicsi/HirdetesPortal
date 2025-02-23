import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Ad } from '../../interfaces/interfaces';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [NavbarComponent, MatInputModule, MatButtonModule, MatSelectModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  constructor(
    private api: ApiService,
    private router: Router
  ){}

  ad: Ad = {
    id: '',
    title: '',
    category: '',
    description: '',
    price: 0,
    image: '',
    date: ''
  }

  createAd(){
    this.api.insert("ads", this.ad).subscribe((res: any) => {
      if (res.success)
      {
        this.router.navigate(["/ads"]);
      }
    });
  }
}
