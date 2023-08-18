import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentajasComponent } from './ventajas.component';

describe('VentajasComponent', () => {
  let component: VentajasComponent;
  let fixture: ComponentFixture<VentajasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentajasComponent]
    });
    fixture = TestBed.createComponent(VentajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
