import { Component, OnInit } from '@angular/core';
import { RenovationItem } from '../renovationitem';
import { RenovationitemService } from '../renovationitem.service';

@Component({
  selector: 'app-renovationitem',
  templateUrl: './renovationitem.component.html',
  styleUrls: ['./renovationitem.component.css']
})
export class RenovationitemComponent implements OnInit {
  renovationItems: RenovationItem[];

  constructor(private renovationItemService: RenovationitemService) {}

  ngOnInit() {
    this.getRenovationItems();
  }

  getRenovationItems(): void{
    this.renovationItemService
        .getRenovationItems()
        .subscribe(renovationItems => this.renovationItems = renovationItems);
  }
}
