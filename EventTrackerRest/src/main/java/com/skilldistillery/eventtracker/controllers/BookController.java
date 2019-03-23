package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.data.BookService;
import com.skilldistillery.eventtrackerjpa.entities.Books;

@RestController
@RequestMapping("api")
public class BookController {

	@Autowired
	BookService service;

	
	@GetMapping(path = "books")
	public List<Books> index() {
		List<Books> allBooks = service.getAllBooks();
		return allBooks;
	}
	
	@DeleteMapping(path = "books/{id}")
	public void deleteBook(@PathVariable("id") int id) {
		try {
			service.deleteBook(id);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@PostMapping(path = "books/update/{id}")
	public Books updateBook(@PathVariable("id") int id, @RequestBody Books updatedBook, HttpServletResponse response) {
		try {
			updatedBook = service.updateBook(id, updatedBook);
			response.setStatus(200);
			return updatedBook;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(404);
		}
		return null;

	}

	@PostMapping(path = "books/{id}")
	public void addBook(@PathVariable("id") int id, HttpServletResponse response) {
		Books b = service.getBookById(id);
		if (b.getId() == id) {
			try {
				service.deleteBook(id);
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