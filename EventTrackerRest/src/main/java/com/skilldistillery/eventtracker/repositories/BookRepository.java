package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtrackerjpa.entities.Books;

public interface BookRepository extends JpaRepository<Books, Integer> {

	List<Books> findByReviews_id(int id);

//	List<Books> findByTitleStartingWith(String title);
	
//	long countByTitle(String title);
	
}
