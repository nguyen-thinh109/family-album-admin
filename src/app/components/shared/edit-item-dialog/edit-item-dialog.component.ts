import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserPhoneNumberData } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-edit-item-dialog',
  templateUrl: './edit-item-dialog.component.html',
  styleUrls: ['./edit-item-dialog.component.scss'],
})
export class EditItemDialogComponent implements OnInit {
  phoneForm = this.formBuilder.group({
    username: ['', Validators.required],
    phoneNumber: [
      '',
      [
        Validators.required,
        Validators.pattern(/(84|0[3|5|7|8|9])+([0-9]{8})\b/),
      ],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: UserPhoneNumberData,
    private dialogRef: MatDialogRef<EditItemDialogComponent>
  ) {
    this.phoneForm.patchValue(this.data);
  }

  ngOnInit() {}

  submitData() {
    this.dialogRef.close({
      username: this.phoneForm.controls.username.value,
      phoneNumber: this.phoneForm.controls.phoneNumber.value?.trim(),
      id: this.data.id,
    });
  }
}
