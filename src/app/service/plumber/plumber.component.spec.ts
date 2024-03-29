import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumberComponent } from './plumber.component';

describe('ItemListComponent', () => {
  let component: PlumberComponent;
  let fixture: ComponentFixture<PlumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
