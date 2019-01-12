import { Component, OnInit } from '@angular/core';
import { RenovationItem } from '../renovationitem';
import { RenovationitemService } from '../renovationitem.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  renovationItems: RenovationItem[] = [];

  constructor(private renovationItemService: RenovationitemService) { }

  ngOnInit() {
    this.getRenovationItems();
  }

  getRenovationItems(){
    this.renovationItemService.getRenovationItems()
          .subscribe(renovationItems => this.renovationItems = renovationItems.slice(1,2));
  }
}
