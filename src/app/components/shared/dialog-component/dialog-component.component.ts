import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogMessage } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss'],
})
export class DialogComponentComponent implements OnInit {
  title: string = "";
  message: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogMessage,
    private dialogRef: MatDialogRef<DialogComponentComponent>
  ) {
    this.message = data.message;
    this.title = data.title ?? 'Alert';
  }

  ngOnInit() { }

  closeDialog() {
    this.dialogRef.close();
  }
}
