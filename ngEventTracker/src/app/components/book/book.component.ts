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


  constructor(private bookservice: BookService) { }

  ngOnInit() {
    this.bookservice.getBooks().subscribe(books => {
      this.books = books;
    });
  }
  onNewBook(book: Books) {
    this.books.unshift(book);

  }

  removeBook(book: Books) {
    if(confirm('Are You Sure?')) {
      this.bookservice.removePost(book.id).subscribe(() => {
        this.books.forEach((cur, index) => {
          if(book.id === cur.id) {
            this.books.splice(index, 1);
          }
        });
      });
    }
  }


  // addBook(title: string, authorName: string, category: string ) {
  //   if (!title || !authorName || !category ) {
  //     alert('Please fill the form');
  //   } else {
  //     this.bookservice.saveBook({ title, authorName, category} as Books).subscribe(
  //       books => {
  //         console.log(books);
  //       }
  //     );
  //   }
  // }

}
