import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/config/api.service';
import { UserPhoneNumberData } from 'src/interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { EditItemDialogComponent } from '../edit-item-dialog/edit-item-dialog.component';
import { DeleteItemComponent } from '../delete-item/delete-item.component';

@Component({
  selector: 'app-existed-phone-item',
  templateUrl: './existed-phone-item.component.html',
  styleUrls: ['./existed-phone-item.component.scss'],
})
export class ExistedPhoneItemComponent implements OnInit {
  @Input() phoneData: UserPhoneNumberData = {
    username: '',
    phoneNumber: '',
    id: '',
  };

  @Input() isEvenIndex: boolean = false;
  @Output() updateCompleteNotifier: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog
  ) { }

  ngOnInit() { }

  editItem() {
    const dialog = this.dialog.open(EditItemDialogComponent, { data: this.phoneData, width: '320px' })

    dialog.afterClosed().subscribe((res) => {
      if (res && res.phoneNumber != this.phoneData.phoneNumber) {
        this.apiService
          .editUser(res)
          .subscribe((respond) => {
            console.log(respond);
            this.updateCompleteNotifier.emit(true);
          });
      }
    })
  }

  deleteItem() {
    const dialog = this.dialog.open(DeleteItemComponent, { data: this.phoneData, width: '320px' })

    dialog.afterClosed().subscribe((res) => {
      if (res) {
        this.apiService
          .deleteUser(this.phoneData)
          .subscribe((res) => {
            console.log(res);
            this.updateCompleteNotifier.emit(true);
          });
      }
    })
  }
}
