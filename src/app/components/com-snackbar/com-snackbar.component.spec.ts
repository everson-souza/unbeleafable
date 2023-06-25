import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComSnackbarComponent } from './com-snackbar.component';

describe('ComSnackbarComponent', () => {
  let component: ComSnackbarComponent;
  let fixture: ComponentFixture<ComSnackbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComSnackbarComponent]
    });
    fixture = TestBed.createComponent(ComSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
