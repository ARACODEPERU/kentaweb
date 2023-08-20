import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstellerComponent } from './newsteller.component';

describe('NewstellerComponent', () => {
  let component: NewstellerComponent;
  let fixture: ComponentFixture<NewstellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewstellerComponent]
    });
    fixture = TestBed.createComponent(NewstellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
