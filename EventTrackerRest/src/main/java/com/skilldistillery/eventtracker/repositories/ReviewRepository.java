package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtrackerjpa.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer> {


}
