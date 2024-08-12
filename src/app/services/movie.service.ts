import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse } from '../components/movies/movieResponse';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apikey = '037f872ea1c47d9d478cde261bcb9c2e';
  constructor(private http: HttpClient) {}

  getAllMovies(pageNumber: number = 1): Observable<any> {
    return this.http.get<any>(
      `http://localhost:3003/movie/all`
    );
  }

  getMovieById(movieId: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:3003/movie/getById/${movieId}`
    );
  }
}
