import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderDefaultComponent } from './page-header-default.component';

describe('PageHeaderDefaultComponent', () => {
  let component: PageHeaderDefaultComponent;
  let fixture: ComponentFixture<PageHeaderDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageHeaderDefaultComponent]
    });
    fixture = TestBed.createComponent(PageHeaderDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
