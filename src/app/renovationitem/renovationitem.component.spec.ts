import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovationitemComponent } from './renovationitem.component';

describe('RenovationitemComponent', () => {
  let component: RenovationitemComponent;
  let fixture: ComponentFixture<RenovationitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenovationitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovationitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
