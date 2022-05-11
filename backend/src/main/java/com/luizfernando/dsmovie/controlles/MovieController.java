package com.luizfernando.dsmovie.controlles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luizfernando.dsmovie.dto.MovieDTO;
import com.luizfernando.dsmovie.services.MovieService;

@RestController
@RequestMapping(value = "/movies")
public class MovieController {
    
	@Autowired
	private MovieService service;
	
	@GetMapping
	public Page<MovieDTO> findALL(Pageable pageble){
		
		return service.findALL(pageble);
		
		
	}
	@GetMapping(value = "/{id}")
	public MovieDTO findbyId(@PathVariable Long id){
		
		return service.findById(id);
		
		
	}
	
	
}
