import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { RenovationItem } from './renovationitem';
import { RENOVATIONITEMS } from './mock-renovationitems';

import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class RenovationitemService {
  private renovationItemsUrl = 'https://customcollection.azurewebsites.net/api/aptrenovationitems';

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }

  getRenovationItems(): Observable<RenovationItem[]> {
    return this.http.get<RenovationItem[]>(this.renovationItemsUrl)
                    .pipe(
                      tap(_ => console.log('fetched renovation items')),
                      catchError(this.handleError('getRenovationItems', []))
                    );
  }

  getRenovationItem(id: number): Observable<RenovationItem>{
    const url = `${this.renovationItemsUrl}/${id}`;
    return this.http.get<RenovationItem>(url)
                    .pipe(
                      tap(_ => console.log(`fetched renovation item with id: ${id}`)),
                      catchError(this.handleError<RenovationItem>(`getRenovationItem with id: ${id}`))
                    );
  }

  updateRenovationItem(renovationItem: RenovationItem): Observable<any>{
    const url = `${this.renovationItemsUrl}/${renovationItem.id}`
    return this.http.put(url, renovationItem, httpOptions)
                    .pipe(
                      tap(_ => console.log(`updated renovation item with id: ${renovationItem.id}`)),
                      catchError(this.handleError<any>('updateRenovationItem'))
                    );
  }

  addRenovationItem(renovationItem: RenovationItem): Observable<RenovationItem>{
    return this.http.post<RenovationItem>(this.renovationItemsUrl, renovationItem, httpOptions)
                    .pipe(
                      tap((renovationItem: RenovationItem) => console.log(`posted new renovation item: ${renovationItem.name} - id: ${renovationItem.id}`)),
                      catchError(this.handleError<RenovationItem>('addRenovationItem'))
                    );
  }

  deleteRenovationItem(renovationItemId: number): Observable<any>{
    const url = `${this.renovationItemsUrl}/${renovationItemId}`
    return this.http.delete<RenovationItem>(url, httpOptions)
                    .pipe(
                      tap(_ => console.log(`deleted renovation item with id: ${renovationItemId}`)),
                      catchError(this.handleError<RenovationItem>('deleteRenovationItem'))
                    );
  }

  searchRenovationItems(term: string): Observable<RenovationItem[]>{
    if(!term.trim()){
      return of([]);
    }

    const url = `${this.renovationItemsUrl}?name=${term}`;
    return this.http.get<RenovationItem[]>(url)
                    .pipe(
                      tap(_ => console.log(`search on term: ${term}`)),
                      catchError(this.handleError<RenovationItem[]>('searchRenovationItems', []))
                    );
  }
}
