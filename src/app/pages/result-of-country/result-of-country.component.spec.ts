import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultOfCountryComponent } from './result-of-country.component';

describe('ResultOfCountryComponent', () => {
  let component: ResultOfCountryComponent;
  let fixture: ComponentFixture<ResultOfCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultOfCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultOfCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
