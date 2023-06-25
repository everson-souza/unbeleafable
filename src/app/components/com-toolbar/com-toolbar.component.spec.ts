import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComToolbarComponent } from './com-toolbar.component';

describe('ComToolbarComponent', () => {
  let component: ComToolbarComponent;
  let fixture: ComponentFixture<ComToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComToolbarComponent]
    });
    fixture = TestBed.createComponent(ComToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
