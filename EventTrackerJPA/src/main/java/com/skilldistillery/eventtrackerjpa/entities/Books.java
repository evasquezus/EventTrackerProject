package com.skilldistillery.eventtrackerjpa.entities;

import java.sql.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Books {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "title")
	private String title;

	@Column(name = "author_name")
	private String authorName;

	@Column(name = "category")
	private String category;

	@Column(name = "data_of_purchase")
	private Date dateOfPurchase;
	
	@JsonIgnore
	@OneToMany(mappedBy = "book")
	private List<Review> reviews;

	public Books() {
		super();
	}

	public Books(int id, String title, String authorName, String category, Date dateOfPurchase) {
		super();
		this.id = id;
		this.title = title;
		this.authorName = authorName;
		this.category = category;
		this.dateOfPurchase = dateOfPurchase;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Date getDateOfPurchase() {
		return dateOfPurchase;
	}

	public void setDateOfPurchase(Date dateOfPurchase) {
		this.dateOfPurchase = dateOfPurchase;
	}
	
	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}

	@Override
	public String toString() {
		return "Books [id=" + id + ", title=" + title + ", authorName=" + authorName + ", category=" + category
				+ ", dateOfPurchase=" + dateOfPurchase + "]";
	}

}
