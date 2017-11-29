package model;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Movie {
    private int movie_id;
    private String title;
    private String description;
    private String length;
    private int year;
    private String image;
    private int rating;
}
