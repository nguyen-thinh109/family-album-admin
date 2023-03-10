import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserPhoneNumberData } from 'src/interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from '../shared/dialog-component/dialog-component.component';
import { ApiService } from 'src/app/config/api.service';

@Component({
  selector: 'app-phone-update',
  templateUrl: './phone-update.component.html',
  styleUrls: ['./phone-update.component.scss'],
})
export class PhoneUpdateComponent implements OnInit {
  activePhoneList: UserPhoneNumberData[] = [];

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

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getCurrentActivePhoneList();
  }

  getCurrentActivePhoneList() {
    this.apiService.getPhoneList().subscribe((res: UserPhoneNumberData[]) => {
      this.activePhoneList = res;
    })
  }

  toggleDetail(e: boolean) {
    this.isShownDetail = e
  }

  sendNewPhoneNumber() {
    let isExsitedPhoneNumber: boolean = this.activePhoneList.some(
      (item: UserPhoneNumberData) =>
        item.phoneNumber == this.phoneForm.controls.phoneNumber.value?.trim()
    );

    if (isExsitedPhoneNumber) {
      return this.dialog.open(DialogComponentComponent, {
        hasBackdrop: true,
        width: '300px',
        data: { message: 'Phone number existed!' },
      });
    }

    if (this.phoneForm.controls.phoneNumber.value && this.phoneForm.controls.username.value) {
      var request: UserPhoneNumberData = {
        username: this.phoneForm.controls.username.value,
        phoneNumber: this.phoneForm.controls.phoneNumber.value
      }
      return this.apiService.createNewUser(request).subscribe(() => {
        this.getCurrentActivePhoneList();
      })
    }

    return;
  }

  updateExistingDataList(e: boolean) {
    if (e) this.getCurrentActivePhoneList();
  }
}
