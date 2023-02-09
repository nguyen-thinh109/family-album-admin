import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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

  photoForm = this.formBuilder.group({
    title: [''],
    link: ['', Validators.required],
  });

  isUpdatingPhoto: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    private data: {
      username?: string;
      phoneNumber?: string;
      title?: string;
      link?: string;
      id: number;
    },
    private dialogRef: MatDialogRef<EditItemDialogComponent>
  ) {
    if (data.phoneNumber) {
      this.phoneForm.patchValue(this.data);
    } else {
      this.photoForm.patchValue(this.data);
      this.isUpdatingPhoto = !this.isUpdatingPhoto;
    }
  }

  ngOnInit() {}

  submitUserData() {
    this.dialogRef.close({
      username: this.phoneForm.controls.username.value,
      phoneNumber: this.phoneForm.controls.phoneNumber.value?.trim(),
      id: this.data.id,
    });
  }

  submitPhotoData() {
    this.dialogRef.close({
      title: this.photoForm.controls.title.value,
      link: this.photoForm.controls.link.value?.trim(),
      id: this.data.id,
    });

    // console.log({
    //   title: this.photoForm.controls.title.value,
    //   link: this.photoForm.controls.link.value?.trim(),
    //   id: this.data.id,
    // });
  }
}
