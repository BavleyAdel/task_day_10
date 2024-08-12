import { Imovie } from "./Imovie";

export interface MovieResponse {
  page: number;
  results: Imovie[];
  total_pages: number;
  total_results: number;
}
