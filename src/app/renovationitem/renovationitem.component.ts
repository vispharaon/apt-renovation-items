import { Component, OnInit } from '@angular/core';
import { RenovationItem } from '../renovationitem';
import { StatusType } from '../status-type.enum';
import { RENOVATIONITEMS } from '../mock-renovationitems';

@Component({
  selector: 'app-renovationitem',
  templateUrl: './renovationitem.component.html',
  styleUrls: ['./renovationitem.component.css']
})
export class RenovationitemComponent implements OnInit {
  renovationItems = RENOVATIONITEMS;

  selectedRenovationItem: RenovationItem;

  renovationItem: RenovationItem = {
    id: 1,
    name: 'Windows - living room',
    dateChanged: new Date(2018, 6, 1),
    cost: 2000.0,
    estimatedCost: 2500.0,
    description: 'New white windows with triple glass. Changed old wood for plastic.',
    status: 2
  };

  statusType = StatusType;

  constructor() { }

  ngOnInit() {
  }

  onSelect(renovationItem: RenovationItem): void{
    this.selectedRenovationItem = renovationItem;    
  }
}
