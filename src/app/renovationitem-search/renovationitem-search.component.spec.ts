import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovationitemSearchComponent } from './renovationitem-search.component';

describe('RenovationitemSearchComponent', () => {
  let component: RenovationitemSearchComponent;
  let fixture: ComponentFixture<RenovationitemSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenovationitemSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovationitemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
