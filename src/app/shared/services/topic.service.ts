import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic.model';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private url: string = 'http://localhost:3000/topic'

  constructor(private http: HttpClient) { }

  getTopic(): Observable<Array<Topic>> {
    return this.http.get<Array<Topic>>(this.url);
  }
}
