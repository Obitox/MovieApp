import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

import {MovieService} from "../movie/movie.service";
import {Movie} from "../movie/Movie";

@Component({
  selector: 'app-movie-player',
  templateUrl: './movie-player.component.html',
  styleUrls: ['./movie-player.component.css']
})
export class MoviePlayerComponent implements OnInit, OnDestroy {

  private subscribe: Subscription;
  private id: number;
  private movie: Movie;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.movie = new Movie();
  }

  ngOnInit() {
    this.subscribe = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    );

    this.subscribe = this.movieService.acquireMovies().subscribe(
      allMovies => {
        for(let movie of allMovies){
          if(movie.movie_id === this.id){
            this.movie = movie;
          }
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
