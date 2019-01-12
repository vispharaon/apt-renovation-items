import { Injectable } from '@angular/core';
import { RenovationItem } from './renovationitem';
import { RENOVATIONITEMS } from './mock-renovationitems';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RenovationitemService {
  constructor() { }

  getRenovationItems(): Observable<RenovationItem[]> {
    return of(RENOVATIONITEMS);
  }
}
