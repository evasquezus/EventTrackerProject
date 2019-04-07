import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../models/books';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl = 'http://localhost:8082/api/books';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.bookUrl);
  }

  saveBook(book: Books): Observable<Books> {
    return this.http.post<Books>(this.bookUrl, book, httpOptions);
  }

  removeBook(book: Books | number): Observable<Books> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.bookUrl}/${id}`;

    return this.http.delete<Books>(url, httpOptions);
  }

  updateBook(book: Books): Observable<Books> {
    const url = `${this.bookUrl}/${book.id}`;

    return this.http.put<Books>(url, book, httpOptions);
  }

}
