package com.skilldistillery.eventtracker.data;

import java.util.List;

import com.skilldistillery.eventtrackerjpa.entities.Books;

public interface BookService {

	List<Books> getAllBooks();

	Books createBook(Books book);

	Books updateBook(int id, Books book);

	boolean deleteBook(int id);

	Books getBookById(int id);
}
