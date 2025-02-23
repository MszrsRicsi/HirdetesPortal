import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Ad } from '../../interfaces/interfaces';

@Component({
  selector: 'app-ad',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ad.component.html',
  styleUrl: './ad.component.scss'
})
export class AdComponent {
  @Input("getAd") ad: Ad = {
    id: "",
    title: "",
    category: "",
    description: "",
    price: 0,
    image: "",
    date: ""
  };
}
