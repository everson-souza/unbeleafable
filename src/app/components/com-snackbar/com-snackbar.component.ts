import { Component, Inject } from '@angular/core';
import {MatSnackBarModule, MatSnackBarRef} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-com-snackbar',
  templateUrl: './com-snackbar.component.html',
  styleUrls: ['./com-snackbar.component.sass'],
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
})
export class ComSnackbarComponent {
  snackBarRef = Inject(MatSnackBarRef);
}
