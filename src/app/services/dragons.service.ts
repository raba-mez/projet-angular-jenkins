import { Injectable } from '@angular/core';
import { Dragon } from '../model/Dragon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Dragon[]> {
    return this.http.get<Dragon[]>('http://localhost:8000/api/dragons')
    .pipe(
      map(apiResponse => apiResponse['hydra:member'])
    );
  }

  createDragon(dragon: Dragon): Observable<Dragon[]> {
    return this.http.post('http://localhost:8000/api/dragons', dragon)
      .pipe(
        switchMap(createdDragon => this.getList())
      );
  }

  deleteDragon(dragon: Dragon): Observable<Dragon[]> {
    return this.http.delete(`http://localhost:8000/api/dragons/${dragon.id}`)
      .pipe(
        switchMap(createdDragon => this.getList())
      );
  }
}
