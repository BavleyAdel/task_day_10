import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TvResponse } from '../components/Series/tvResponse';

@Injectable({
  providedIn: 'root',
})
export class TvDataService {
  apikey = '037f872ea1c47d9d478cde261bcb9c2e';
  constructor(private http: HttpClient,) {}

  getAllSeries(pageNumber: number = 1): Observable<TvResponse> {
    return this.http.get<TvResponse>(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.apikey}&page=${pageNumber}`
    );
  }

  getSeriesById(movieId: number): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/tv/${movieId}?api_key=${this.apikey}`
    );
  }
}
