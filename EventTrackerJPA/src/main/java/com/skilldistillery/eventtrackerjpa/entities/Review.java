package com.skilldistillery.eventtrackerjpa.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Review {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "review_detail")
	private String reviewDetail;

	@ManyToOne
	@JoinColumn(name = "books_id")
	private Books book;

	public Review() {
		super();
	}

	public Review(int id, String reviewDetail, Books book) {
		super();
		this.id = id;
		this.reviewDetail = reviewDetail;
		this.book = book;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getReviewDetail() {
		return reviewDetail;
	}

	public void setReviewDetail(String reviewDetail) {
		this.reviewDetail = reviewDetail;
	}

	public Books getBook() {
		return book;
	}

	public void setBook(Books book) {
		this.book = book;
	}

	@Override
	public String toString() {
		return "Review [id=" + id + ", reviewDetail=" + reviewDetail + ", book=" + book + "]";
	}

}
