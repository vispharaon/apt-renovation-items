import { Component, OnInit, Input } from '@angular/core';
import { RenovationItem } from '../renovationitem';
import { StatusType } from '../status-type.enum';

@Component({
  selector: 'app-renovation-item-detail',
  templateUrl: './renovation-item-detail.component.html',
  styleUrls: ['./renovation-item-detail.component.css']
})
export class RenovationItemDetailComponent implements OnInit {

  @Input() renovationItem: RenovationItem;

  statusType = StatusType;
  
  constructor() { }

  ngOnInit() {
  }

}
