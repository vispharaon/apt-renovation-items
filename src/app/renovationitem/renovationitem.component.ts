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

  add(name: string): void{
    name = name.trim();
    if(!name) {return;}
    let renovationItem = new RenovationItem();
    renovationItem.name = name;
    renovationItem.dateChanged =  new Date();
    renovationItem.estimatedCost = 0;
    renovationItem.cost = 0;
    renovationItem.description = "-";
    renovationItem.status = 0;

    this.renovationItemService.addRenovationItem(renovationItem)
                              .subscribe(renovationItem => this.renovationItems.push(renovationItem));
  }

  delete(renovationItem: RenovationItem): void{
    this.renovationItems = this.renovationItems.filter(ri => ri != renovationItem);
    this.renovationItemService.deleteRenovationItem(renovationItem.id)
                              .subscribe();
  }
}
