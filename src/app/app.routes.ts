import { Routes } from '@angular/router';
import { SeriesComponent } from './components/Series/series';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MoviesComponent } from './components/movies/movies';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SeriesComponent },
  { path: 'movie/all', component: MoviesComponent },
  { path: 'details/:id', component: SeriesDetailsComponent },
  { path: 'moviedetails/:id', component: MoviesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];
