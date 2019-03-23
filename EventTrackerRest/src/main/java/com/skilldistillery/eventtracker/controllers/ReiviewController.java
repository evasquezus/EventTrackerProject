package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.data.ReviewService;
import com.skilldistillery.eventtrackerjpa.entities.Review;

@RestController
@RequestMapping("api")
public class ReiviewController {

	@Autowired
	ReviewService repo;

	@GetMapping(path = "reviews")
	public List<Review> getAll() {
		return repo.getAllReviews();
	}

	@DeleteMapping(path = "reviews/{id}")
	public void deleteReview(@PathVariable("id") int id) {
		try {
			repo.deleteReview(id);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@PostMapping(path = "review/{id}")
	public void addReview(@PathVariable("id") int id, HttpServletResponse response) {
		Review b = repo.getReviewByID(id);
		if (b.getId() == id) {
			try {
				repo.deleteReview(id);
				response.setStatus(204);
			} catch (Exception e) {
				e.printStackTrace();
				response.setStatus(401);
			}
		} else {
			response.setStatus(404);
		}
	}

}
