package com.example.api.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Data
@Document(collection = "movies")
public class Movie {
    @Id
    private String id;
    private String title;
    private String description;
    private double rating;
    private int metascore;
    private int numberOfVotes ;
    private int year;
    private String runtime;
    private int revenue;
    private String director;
    private String actors;

    private String genre;

}
