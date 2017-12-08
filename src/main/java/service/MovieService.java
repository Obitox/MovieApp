package service;

import database.ConnectionManager;
import model.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import security.AppConfig;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class MovieService {
    private Statement stmt = null;
    private Connection con = null;
    private ResultSet rs = null;
    private String sql = "";
    private ArrayList<Movie> listOfAllMovies;

    public MovieService() {
        listOfAllMovies = new ArrayList<>();
    }

    public ArrayList<Movie> getAllMovies(){
        listOfAllMovies.clear();
        sql = "SELECT * FROM movie";
        con = ConnectionManager.getConnection();
        try {
            stmt = con.prepareStatement(sql);
            rs = stmt.executeQuery(sql);
            while(rs.next()){
                int movie_id = rs.getInt("movie_id");
                String title = rs.getString("title");
                String description = rs.getString("description");
                String length = rs.getString("length");
                int year = rs.getInt("year");
                String image = rs.getString("image");
                int rating = rs.getInt("rating");
                listOfAllMovies.add(new Movie(movie_id, title, description, length, year, image, rating));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return listOfAllMovies;
    }
}
