import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { RenovationItem } from '../renovationitem';
import { RenovationitemService } from '../renovationitem.service';

@Component({
  selector: 'app-renovationitem-search',
  templateUrl: './renovationitem-search.component.html',
  styleUrls: ['./renovationitem-search.component.css']
})
export class RenovationitemSearchComponent implements OnInit {
  renovationItems$: Observable<RenovationItem[]>;
  private searchTerms = new Subject<string>();

  constructor(private renovationItemService: RenovationitemService) { }

  search(term: string){
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.renovationItems$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) =>  this.renovationItemService.searchRenovationItems(term))
    );
  }

}
