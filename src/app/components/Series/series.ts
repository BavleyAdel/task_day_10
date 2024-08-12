import { Component } from '@angular/core';
import { TvDataService } from '../../services/tv-data.service';
import { ISeries } from './ISeries';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './series.html',
  styleUrl: './series.css',
})
export class SeriesComponent {
  allSeries: ISeries[] = [];
  searchId!: number;
  subscription!: Subscription;
  currentPage!: BehaviorSubject<number>;
  page!: number;
  totalPages!: number;
  constructor(private tvServ: TvDataService) {
    this.currentPage = new BehaviorSubject<number>(this.page);
  }

  ngOnInit() {
    this.currentPage.subscribe((newPage) => {
      this.subscription = this.tvServ
        .getAllSeries(newPage)
        .subscribe((response) => {
          console.log(response);
          this.allSeries = response.results;
          this.page = response.page;
          this.totalPages = response.total_pages;
        });
    });
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.currentPage.next(++this.page);
    }
  }
  prevPage() {
    if (this.page > 1) {
      this.currentPage.next(--this.page);
    }
  }
}
