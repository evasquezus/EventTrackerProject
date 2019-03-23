package com.skilldistillery.eventtracker.data;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.repositories.ReviewRepository;
import com.skilldistillery.eventtrackerjpa.entities.Review;

@Service
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	ReviewRepository repo;

	@Override
	public List<Review> getAllReviews() {
		List<Review> allReviews = repo.findAll();
		return allReviews;
	}

	@Override
	public Review createReview(Review review) {
		if (review.getReviewDetail() != null) {
			repo.saveAndFlush(review);
			return review;
		}
		return null;
	}

	@Override
	public boolean deleteReview(int id) {
		boolean deleted = false;
		if (repo.existsById(id)) {
			repo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}

	@Override
	public Review getReviewByID(int id) {
		Optional<Review> reviewsRetrieved = repo.findById(id);
		if (!reviewsRetrieved.isPresent()) {
			return null;
		}
		Review b = reviewsRetrieved.get();
		return b;
	}

}
