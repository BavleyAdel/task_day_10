import { ISeries } from "./ISeries";

export interface TvResponse {
  page: number;
  results: ISeries[];
  total_pages: number;
  total_results: number;
}
