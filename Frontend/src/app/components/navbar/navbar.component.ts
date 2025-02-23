import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

  openMenu(){
    document.querySelector(".links")?.classList.add("open");
  }

  closeMenu(){
    document.querySelector(".links")?.classList.remove("open");
  }
}
