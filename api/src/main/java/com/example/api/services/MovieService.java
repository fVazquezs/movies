package com.example.api.services;


import com.example.api.model.Movie;
import com.example.api.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;


    public List<Movie> getAll() {
        return movieRepository.findAllByOrderByRevenueDesc();
    }

    public List<Movie> getByYear(int year) {
        return movieRepository.findAllByYearOrderByRevenueDesc(year);
    }
}
