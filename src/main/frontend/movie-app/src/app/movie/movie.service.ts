import {Injectable, OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";
import {Movie} from "./Movie";

@Injectable()
export class MovieService {

  constructor(private http: Http) {}

  acquireMovies() : any {
    return this.http.get("/movies/getAllMovies").map(res => res.json());
  }

}
