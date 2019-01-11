import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovationItemDetailComponent } from './renovation-item-detail.component';

describe('RenovationItemDetailComponent', () => {
  let component: RenovationItemDetailComponent;
  let fixture: ComponentFixture<RenovationItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenovationItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovationItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
