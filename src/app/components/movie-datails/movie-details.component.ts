import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  movie!: any;
  id!: number;

  constructor(private movServ: MovieService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);
    this.movServ.getMovieById(this.id).subscribe((response) => {
      console.log(response);

      this.movie = response;
    });
  }
}
