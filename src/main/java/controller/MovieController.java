package controller;

import model.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import service.MovieService;

import java.util.List;

@RestController
@RequestMapping("/movies")
@Component
public class MovieController {

    private final MovieService movieService;

    @Autowired
    public MovieController(@Qualifier("movieService") MovieService ms) {
        this.movieService = ms;
    }

    @RequestMapping(value = "/getAllMovies", method = RequestMethod.GET)
    public List<Movie> getAllMovies(){
        return movieService.getAllMovies();
    }
}
