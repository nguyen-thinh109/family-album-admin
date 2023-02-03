import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserPhoneNumberData } from 'src/interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from '../shared/dialog-component/dialog-component.component';

@Component({
  selector: 'app-phone-update',
  templateUrl: './phone-update.component.html',
  styleUrls: ['./phone-update.component.scss'],
})
export class PhoneUpdateComponent implements OnInit {
  activePhoneList: UserPhoneNumberData[] = [
    {
      username: 'Thinh',
      phoneNumber: '0984018891',
    },
    {
      username: 'Thinh',
      phoneNumber: '0886718891',
    },
  ];

  isShownDetail: boolean = false;

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

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.getCurrentActivePhoneList();
  }

  getCurrentActivePhoneList() { }

  sendNewPhoneNumber() {
    let isExsitedPhoneNumber: boolean = this.activePhoneList.some(
      (item: UserPhoneNumberData) =>
        item.phoneNumber == this.phoneForm.controls.phoneNumber.value?.trim()
    );

    if (isExsitedPhoneNumber) {
      this.dialog.open(DialogComponentComponent, {
        hasBackdrop: true,
        height: '300px',
        width: '300px',
        data: { message: 'Phone number existed!' },
      });
    } else {
      //api
    }
  }
}
