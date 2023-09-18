import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSectionTwoComponent } from './contact-section-two.component';

describe('ContactSectionTwoComponent', () => {
  let component: ContactSectionTwoComponent;
  let fixture: ComponentFixture<ContactSectionTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactSectionTwoComponent]
    });
    fixture = TestBed.createComponent(ContactSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
