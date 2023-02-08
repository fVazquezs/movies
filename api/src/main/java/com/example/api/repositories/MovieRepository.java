package com.example.api.repositories;

import com.example.api.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {
    List<Movie> findAllByYearOrderByRevenueDesc(int year);
    List<Movie> findAllByOrderByRevenueDesc();
    @Query("SELECT DISTINCT u.year FROM Movie u")
    List<Integer> findAllDistinctYears();

}
