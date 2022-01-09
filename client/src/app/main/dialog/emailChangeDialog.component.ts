import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'email-change',
  templateUrl: './emailChangeDialog.component.html',
})
export class EmailChangeDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EmailChangeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
