import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddheroComponent } from './addhero.component';

describe('AddheroComponent', () => {
  let component: AddheroComponent;
  let fixture: ComponentFixture<AddheroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddheroComponent]
    });
    fixture = TestBed.createComponent(AddheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
