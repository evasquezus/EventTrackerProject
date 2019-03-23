package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtrackerjpa.entities.Books;

public interface BookRepository extends JpaRepository<Books, Integer> {

//	public List<Book> findByTitleLike(String keyword, String keyword2);



}
