import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Books } from '../models/books';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl = 'http://localhost:8082/api/books';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.bookUrl);
  }
}
