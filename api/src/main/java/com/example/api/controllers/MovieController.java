package com.example.api.controllers;

import com.example.api.model.Movie;
import com.example.api.services.MovieService;
import com.mongodb.client.DistinctIterable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public ResponseEntity<List<Movie>> getMovies(){
        return new ResponseEntity<>(movieService.getAll(), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{year}")
    public ResponseEntity<List<Movie>> getMoviesByYearAndOrderedByRevenue(@PathVariable int year){
        return new ResponseEntity<>(movieService.getByYear(year), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/years")
    public ResponseEntity<List<Integer>> getMoviesByYearAndOrderedByRevenue(){
        return new ResponseEntity<>(movieService.getDistinctYears(), HttpStatus.OK);
    }

}
