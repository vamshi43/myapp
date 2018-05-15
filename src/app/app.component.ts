import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto'
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  templateUrl: './dialog-component.html',
  styleUrls: ['./app.component.css']
})



export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    onNoClick(): void {
      this.dialogRef.close();
    
    }
}

