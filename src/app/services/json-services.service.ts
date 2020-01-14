import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonServicesService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = environment.url + query;

    return this.http.get(url);
  }

  getPosts() {

    return this.getQuery('posts');

  }

  getPost(id: number) {

    return this.getQuery(`posts/${id}`);

  }
}
