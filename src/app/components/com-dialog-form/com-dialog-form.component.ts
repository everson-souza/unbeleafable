import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface Plantas{
  userID: string;
  id: string;
  plant: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-com-dialog',
  templateUrl: './com-dialog-form.component.html',
  styleUrls: ['./com-dialog-form.component.sass'],  
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule,
  ],
})

export class ComDialogFormComponent {
  
  constructor(private dialogRef: MatDialogRef<ComDialogFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Plantas) { }

  cancel() {
    // closing itself and sending data to parent component
    this.dialogRef.close({ data: null })
  }

  confirm() {
    // closing itself and sending data to parent component
    this.dialogRef.close({ data: this.data })
  }
}
