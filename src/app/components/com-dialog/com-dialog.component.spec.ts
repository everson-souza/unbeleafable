import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComDialogComponent } from './com-dialog.component';

describe('ComDialogComponent', () => {
  let component: ComDialogComponent;
  let fixture: ComponentFixture<ComDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComDialogComponent]
    });
    fixture = TestBed.createComponent(ComDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
