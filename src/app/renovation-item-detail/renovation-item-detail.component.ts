import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RenovationItem } from '../renovationitem';
import { RenovationitemService } from '../renovationitem.service';
import { StatusType } from '../status-type.enum';

@Component({
  selector: 'app-renovation-item-detail',
  templateUrl: './renovation-item-detail.component.html',
  styleUrls: ['./renovation-item-detail.component.css']
})
export class RenovationItemDetailComponent implements OnInit {

  @Input() renovationItem: RenovationItem;

  statusType = StatusType;

  constructor(private route: ActivatedRoute,
              private renovationItemService: RenovationitemService,
              private location: Location) { }

  ngOnInit() {
    this.getRenovationItem();
  }

  getRenovationItem(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.renovationItemService
        .getRenovationItem(id)
        .subscribe(renovationItem => this.renovationItem = renovationItem);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void{
    this.renovationItemService.updateRenovationItem(this.renovationItem)
                              .subscribe(() => this.goBack());
  }
}
