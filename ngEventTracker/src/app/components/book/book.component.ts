import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BookService } from '../../services/book.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Books[];
  currentBook: Books = {
    id: 0,
    title: '',
    authorName: '',
    category: '',
    dateOfPurchase: ''
  };
  isEdit: boolean = false;

  constructor(private bookservice: BookService) { }

  ngOnInit() {
    this.bookservice.getBooks().subscribe(books => {
      this.books = books;
    });
  }
  onNewBook(book: Books) {
    this.books.unshift(book);

  }
  editBook(book: Books) {
    this.currentBook = book;
    this.isEdit = true;
  }

  removeBook(book: Books) {
    if (confirm('Are You Sure?')) {
      this.bookservice.removeBook(book.id).subscribe(() => {
        this.books.forEach((cur, index) => {
          if (book.id === cur.id) {
            this.books.splice(index, 1);
          }
        });
      });
    }
  }
  onUpdatedBook(book: Books) {
    this.books.forEach((cur, index) => {
      if (book.id === cur.id) {
        this.books.splice(index, 1);
        this.books.unshift(book);
        this.isEdit = false;
        this.currentBook = {
          id: 0,
          title: '',
          authorName: '',
          category: '',
          dateOfPurchase: ''
        }
      }
    });
  }
}
