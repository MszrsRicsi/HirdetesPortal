import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AdListComponent } from '../ad-list/ad-list.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [NavbarComponent, AdListComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
