package com.example.api.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Data
@Entity
@Table(name = "movies")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Movie implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String title;
    @Column(length = 1000)
    private String description;
    private double rating;
    private int metascore;
    private int numberOfVotes ;
    @Column(name = "year_of_release")
    private int year;
    private String runtime;
    private int revenue;
    private String director;
    private String actors;

    private String genre;

}
