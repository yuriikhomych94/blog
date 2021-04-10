import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url: string = 'http://localhost:3000/article'

  constructor(private http: HttpClient) { }

  getArticle(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(this.url);
  }

  addArticle(article: Article): Observable<Array<Article>> {
    return this.http.post<Array<Article>>(this.url, article);
  }

  getOneArticle(id: number): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(`${this.url}/${id}`);
  }


 }
