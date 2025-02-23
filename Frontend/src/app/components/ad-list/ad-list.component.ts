import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdComponent } from '../ad/ad.component';
import { Ad } from '../../interfaces/interfaces';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AdFilterPipe } from '../../pipes/ad-filter.pipe';

@Component({
  selector: 'app-ad-list',
  standalone: true,
  imports: [CommonModule, AdComponent, FormsModule, AdFilterPipe],
  templateUrl: './ad-list.component.html',
  styleUrl: './ad-list.component.scss'
})
export class AdListComponent implements OnInit{
  constructor(private api: ApiService){}

  filterText: string = "";

  ads: Ad[] = []

  ngOnInit(): void {
    this.getAds();
  }

  getAds()
  {
    this.api.selectAll("ads").subscribe((res: any) => {
      res.forEach((ad: Ad) => {
        if (ad.image == null) ad.image = "noImage.svg";
      });

      this.ads = res as Ad[];
    })
  }
}
