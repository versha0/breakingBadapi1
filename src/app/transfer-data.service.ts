import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  id: any;
  name: any;
  constructor(private http: HttpClient) { }
  getAllCharacters(): Observable<any> {
   const url = 'https://www.breakingbadapi.com/api/characters';
   return this.http.get(url);
  }
  getCharacterById(iddd: number): Observable<any> {
    const url = 'https://www.breakingbadapi.com/api/characters/' + iddd;
    return this.http.get(url);

}
getCharacterByName() {
    const url = 'https://www.breakingbadapi.com/api/characters?name=' + this.name;
    return this.http.get(url);
}
  storeid(idd: number) {
    this.id = idd;
  }
  getId() {
    return this.id;
  }
  storeName(namee: any) {
    this.name = namee;
  }
  getName() {
    return this.name;
  }
}
