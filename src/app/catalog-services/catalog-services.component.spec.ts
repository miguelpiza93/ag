import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogServicesComponent } from './catalog-services.component';

describe('CatalogServicesComponent', () => {
  let component: CatalogServicesComponent;
  let fixture: ComponentFixture<CatalogServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
