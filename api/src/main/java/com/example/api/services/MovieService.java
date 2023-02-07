package com.example.api.services;


import com.example.api.model.Movie;
import com.example.api.repositories.MovieRepository;
import com.mongodb.client.DistinctIterable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.StreamSupport;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private MongoTemplate mongoTemplate;


    public List<Movie> getAll() {
        return movieRepository.findAllByOrderByRevenueDesc();
    }

    public List<Movie> getByYear(int year) {
        return movieRepository.findAllByYearOrderByRevenueDesc(year);
    }

    public List<Integer> getDistinctYears() {
        //TODO remove and change this query to repository
        DistinctIterable<Integer> years = mongoTemplate.getCollection("movies").distinct("year", Integer.class);
        return StreamSupport.stream(years.spliterator(), false).toList();
    }

    public boolean create(List<Movie> movies) {
        for (Movie movie: movies) {
            movieRepository.insert(movie);
        }
        return true;
    }
}
