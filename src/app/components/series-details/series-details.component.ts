import { Component, Injectable } from '@angular/core';
import { TvDataService } from '../../services/tv-data.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series-details.component.html',
  styleUrl: './series-details.component.css',
})
export class SeriesDetailsComponent {
  series!: any;
  id!: number;

  constructor(private tvServ: TvDataService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);
    this.tvServ.getSeriesById(this.id).subscribe((response) => {
      console.log(response);

      this.series = response;
    });
  }
}
