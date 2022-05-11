package com.luizfernando.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luizfernando.dsmovie.entities.Movie;

public interface  MovieRepository extends JpaRepository<Movie, Long>{
	

}
