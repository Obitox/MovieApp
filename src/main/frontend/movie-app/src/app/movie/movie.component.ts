import {Component, OnDestroy, OnInit} from '@angular/core';

import {Movie} from "./Movie";
import {Subscription} from "rxjs/Subscription";
import {MovieService} from "./movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  private movies: Movie[];
  private subscription: Subscription;
  private checkHover: boolean;

  constructor(private moviesService: MovieService, private router: Router) {
    this.checkHover = false;
  }

  ngOnInit() {
    this.loadAllMovies();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  private loadAllMovies() {
    this.subscription = this.moviesService.acquireMovies().subscribe(
      moviesFromServer => this.movies = moviesFromServer
    );
  }

  private movieInfo(title: string, rating: number, image: string) {
    this.checkHover = true;
  }

  private hideInfo(){
    this.checkHover = false;
  }

  private navigateToMovie(){
    this.router.navigateByUrl('specific-movie');
  }

}
