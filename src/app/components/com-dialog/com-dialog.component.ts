import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-com-dialog',
  templateUrl: './com-dialog.component.html',
  styleUrls: ['./com-dialog.component.sass'],  
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class ComDialogComponent {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<ComDialogComponent>) { }

  cancel() {
    // closing itself and sending data to parent component
    this.dialogRef.close({ data: 'you cancelled' })
  }

  confirm() {
    // closing itself and sending data to parent component
    this.dialogRef.close({ data: 'you confirmed' })
  }
}
