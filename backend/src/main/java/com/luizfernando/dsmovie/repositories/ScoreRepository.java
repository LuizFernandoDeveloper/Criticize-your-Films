package com.luizfernando.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luizfernando.dsmovie.entities.Score;
import com.luizfernando.dsmovie.entities.ScorePK;

public interface  ScoreRepository extends JpaRepository<Score, ScorePK>{
	

	
	
}
