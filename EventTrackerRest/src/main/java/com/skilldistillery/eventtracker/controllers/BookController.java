package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.data.BookService;
import com.skilldistillery.eventtrackerjpa.entities.Books;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4200" })
public class BookController {

	@Autowired
	BookService service;

	@GetMapping(path ="books")
	public List<Books> index() {
		List<Books> allBooks = service.getAllBooks();
		return allBooks;
	}

	@GetMapping(path ="books/{id}")
	public Books getIndividualBook(@PathVariable("id") int id) {
		Books bookRetrived = service.getBookById(id);
		return bookRetrived;
	}

	@DeleteMapping(path ="books/{id}")
	public void deleteBook(@PathVariable("id") int id) {
		try {
			service.deleteBook(id);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@PutMapping(path ="books/{id}")
	public Books updateBook(@PathVariable("id") int id, @RequestBody Books updatedBook, HttpServletResponse response) {
		try {
			updatedBook = service.updateBook(id, updatedBook);
			response.setStatus(200);
			return updatedBook;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
		return null;

	}

	@PostMapping(path ="books")
	public Books addBook(@RequestBody Books bookToBeAdded, HttpServletResponse response) {
		Books newBook = service.createBook(bookToBeAdded);
		return newBook;
	}

//	@GetMapping(path = "books/search/{title}")
//	public List<Books> findBookByTitleNameLike(String title) {
//		String bookTitleContaining = "%" + title + "%";
//		return service.findBookByTitleNameLike(bookTitleContaining);
//	}
//
//	@GetMapping(path = "books/count/{title}")
//	public Long countByBookByTitleNameLike(String title) {
//		String bookTitleContaining = "%" + title + "%";
//		long count =  service.countByTitle(bookTitleContaining);
//		return count;
//	}
}