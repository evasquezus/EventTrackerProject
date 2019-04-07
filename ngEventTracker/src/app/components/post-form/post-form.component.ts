import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BookService } from '../../services/book.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
// import swal from 'SweetAlert';

// import swal from 'sweetalert';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newBook: EventEmitter<Books> = new EventEmitter();
  @Output() updatedBook: EventEmitter<Books> = new EventEmitter();
  @Input() currentBook: Books;
  @Input() isEdit: boolean;
  constructor(private bookservice: BookService ) { }
  ngOnInit() {

  }

  addBook(title: string, authorName: string, category: string) {
    console.log(title, authorName, category);
    if (!title && !authorName && !category) {
      alert('Please fill in the form completly');
    } else {
      // swal('Great', 'You added a book to the list', 'success');
      this.bookservice.saveBook({ title, authorName, category} as Books).subscribe
        (book => {
          console.log(book);
          location.reload();
        }

        );
    }
  }
  updateBook() {
    this.bookservice.updateBook(this.currentBook).subscribe(book => {
      console.log(book);
      this.isEdit = false;
      this.updatedBook.emit(book);
      // location.reload();
    });
  }

}

