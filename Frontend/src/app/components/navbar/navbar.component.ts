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

  openSidebarNav()
  {
    document.querySelector(".sidebarNav")?.classList.add("open");
    document.querySelector("body")!.style.overflow = "hidden";
  }

  closeSidebarNav()
  {
    document.querySelector(".sidebarNav")?.classList.remove("open");
    document.querySelector("body")!.style.overflow = "auto";
  }
}
