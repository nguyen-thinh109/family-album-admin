import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserPhoneNumberData, PhotoData } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss'],
})
export class DeleteItemComponent implements OnInit {
  
  messageTarget: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: UserPhoneNumberData,
    private dialogRef: MatDialogRef<DeleteItemComponent>
  ) {
    this.messageTarget = this.data.phoneNumber;
  }

  ngOnInit() {}

  confirmDelete(){
    this.dialogRef.close('delete');
  }
}
