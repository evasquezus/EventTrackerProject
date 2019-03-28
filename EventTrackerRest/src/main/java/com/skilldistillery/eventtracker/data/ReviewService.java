package com.skilldistillery.eventtracker.data;

import java.util.List;

import com.skilldistillery.eventtrackerjpa.entities.Review;

public interface ReviewService {

	List<Review> getAllReviews();

	Review createReview(Review review);

	boolean deleteReview(int id);

	Review getReviewByID(int id);
}
