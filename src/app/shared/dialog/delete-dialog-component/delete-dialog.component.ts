import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './delete-dialog.component.html'
})

export class DeleteDialogComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DeleteDialogComponent>,){
        dialogRef.disableClose = true;
    }
    ngOnInit(): void {
        console.log(this.data);
    }

    close() {
        this.dialogRef.close();
    }
    delete() {
        this.dialogRef.close('delete');
    }
}
