import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';

import {RouterModule, Routes} from '@angular/router';
import {MovieService} from "./movie/movie.service";
import { LoginComponent } from './login/login.component';
import { MoviePlayerComponent } from './movie-player/movie-player.component';
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {
    path: 'movie', component: MovieComponent,
  },
  {
    path: 'movie-player/:id', component: MoviePlayerComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', redirectTo: 'movie'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    LoginComponent,
    MoviePlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
