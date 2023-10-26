import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-edit-dialog',
    templateUrl: './edit-dialog.component.html'
})

export class EditDialogComponent implements OnInit {
  

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<EditDialogComponent>,){
        dialogRef.disableClose = true;
    }
    ngOnInit(): void {
        console.log(this.data);
    }

    close() {
        this.dialogRef.close();
    }
}
