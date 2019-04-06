import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Books[];

  constructor(private bookservice: BookService) { }

  ngOnInit() {
    this.bookservice.getBooks().subscribe(books => {
       this.books = books;
    });
  }
}
