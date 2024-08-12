import { Component } from '@angular/core';
import { TvDataService } from '../../services/tv-data.service';
import { Imovie } from './Imovie';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class MoviesComponent {
  allMovies: Imovie[] = [];
  searchId!: number;
  subscription!: Subscription;
  currentPage!: BehaviorSubject<number>;
  page!: number;
  totalPages!: number;
  constructor(private movieServ: MovieService) {
    this.currentPage = new BehaviorSubject<number>(this.page);
  }

  ngOnInit() {
    this.currentPage.subscribe((newPage) => {
      this.subscription = this.movieServ
        .getAllMovies(newPage)
        .subscribe((response) => {
          console.log(response[0].results);
          this.allMovies = response[0].results;
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
