package com.skilldistillery.eventtracker.data;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.repositories.BookRepository;
import com.skilldistillery.eventtrackerjpa.entities.Books;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	BookRepository repo;

	@Override
	public List<Books> getAllBooks() {
		List<Books> allBooks = repo.findAll();
		return allBooks;
	}

	@Override
	public Books getBookById(int id) {
		Optional<Books> bookRetrived = repo.findById(id);
		if (!bookRetrived.isPresent()) {
			return null;
		}
		Books b = bookRetrived.get();
		return b;
	}

	@Override
	public Books createBook(Books book) {
		if (book.getTitle() != null && book.getCategory() != null & book.getAuthorName() != null) {
			repo.saveAndFlush(book);
			return book;
		}
		return null;
	}

	@Override
	public Books updateBook(int id, Books book) {
		Optional<Books> opt = repo.findById(id);
		if (opt.isPresent()) {
			Books managed = opt.get();
			managed.setTitle(book.getTitle());
			managed.setAuthorName(book.getAuthorName());
			managed.setCategory(book.getCategory());
			managed.setDateOfPurchase(book.getDateOfPurchase());
			repo.saveAndFlush(book);
		}
		return null;
	}

	@Override
	public boolean deleteBook(int id) {
		boolean deleted = false;
		if (repo.existsById(id)) {
			repo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}

}
