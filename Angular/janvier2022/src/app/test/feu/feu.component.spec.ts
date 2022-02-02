import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuComponent } from './feu.component';

describe('FeuComponent', () => {
  let component: FeuComponent;
  let fixture: ComponentFixture<FeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
