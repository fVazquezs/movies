package com.example.api.repositories;

import com.example.api.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {
    List<Movie> findAllByYearOrderByRevenueDesc(int year);
    List<Movie> findAllByOrderByRevenueDesc();

}
