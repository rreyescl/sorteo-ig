import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteoComponent } from './sorteo.component';

describe('SorteoComponent', () => {
  let component: SorteoComponent;
  let fixture: ComponentFixture<SorteoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SorteoComponent]
    });
    fixture = TestBed.createComponent(SorteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
