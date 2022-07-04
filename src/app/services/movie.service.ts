import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private API_URL: string  = 'https://api.jikan.moe/v4/anime';

  //key 4b921b53

  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string) :Observable<any>{
    return this.http.get(this.API_URL + '?q='+searchTerm)
  }
}
