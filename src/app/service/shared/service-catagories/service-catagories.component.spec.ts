import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCatagoriesComponent } from './service-catagories.component';

describe('ServiceCatagoriesComponent', () => {
  let component: ServiceCatagoriesComponent;
  let fixture: ComponentFixture<ServiceCatagoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCatagoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
