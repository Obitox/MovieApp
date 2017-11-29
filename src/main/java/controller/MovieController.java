package controller;

import model.Movie;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.MovieService;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {

    private final MovieService ms = new MovieService();

    @RequestMapping(value = "/getAllMovies")
    public List<Movie> getAllMovies(){
        return ms.getAllMovies();
    }
}
