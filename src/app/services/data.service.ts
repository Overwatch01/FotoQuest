import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public url: 'https://api.myjson.com/bins/jpfmg';

  constructor(private http: Http) { }

  getFotoQuest() {
    return this.http.get(this.url);
  }
}
