import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComDialogFormComponent } from './com-dialog-form.component';

describe('ComDialogComponent', () => {
  let component: ComDialogFormComponent;
  let fixture: ComponentFixture<ComDialogFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComDialogFormComponent]
    });
    fixture = TestBed.createComponent(ComDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
