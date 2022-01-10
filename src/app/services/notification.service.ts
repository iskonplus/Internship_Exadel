import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  isTimeOut = 5000;

  constructor(private snackBar: MatSnackBar) { }

  success(message: string) {

    this.snackBar.open(message, 'Close', {
      verticalPosition: this.verticalPosition,
      duration: this.isTimeOut,
      panelClass: 'app-snackbar-success',

    });

  }

  error(message: string) {

    this.snackBar.open(message, 'Close', {
      verticalPosition: this.verticalPosition,
      duration: this.isTimeOut,
      panelClass: 'app-snackbar-error',
    });

  }

  
}
