import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Movie} from "./Movie";
import * as _ from 'lodash';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) {}

  acquireMovies() : any {
    return this.http
      .get<Movie[]>("/movies/getAllMovies")
      .map(data => _.values(data))
  }

}
