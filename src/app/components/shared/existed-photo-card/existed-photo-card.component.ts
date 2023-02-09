import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PhotoData } from 'src/interfaces/interfaces';
import { ApiService } from 'src/app/config/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from '../delete-item/delete-item.component';
import { EditItemDialogComponent } from '../edit-item-dialog/edit-item-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-existed-photo-card',
  templateUrl: './existed-photo-card.component.html',
  styleUrls: ['./existed-photo-card.component.scss'],
})
export class ExistedPhotoCardComponent implements OnInit {
  @Input() photoItemData: PhotoData = {
    id: '',
    title: '',
    link: '',
  };
  @Input() isLastItem: boolean = true;
  @Input() currentAlbum: string = '';
  @Output() updateComplete: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _apiService: ApiService,
    private _dialog: MatDialog,
    private _matSnackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  editPhoto() {
    const dialog = this._dialog.open(EditItemDialogComponent, {
      data: this.photoItemData,
      width: '320px',
    });

    dialog.afterClosed().subscribe((res) => {
      if (res) {
        this._apiService
          .editPhoto(this.currentAlbum, res)
          .subscribe((respond) => {
            console.log(respond);
            this.updateComplete.emit('completed');
          });
      }
    });
  }

  deletePhoto() {
    const dialog = this._dialog.open(DeleteItemComponent, {
      width: '320px',
    });

    dialog.afterClosed().subscribe((r) => {
      if (r)
        this._apiService
          .deletePhoto(this.currentAlbum, this.photoItemData)
          .subscribe((res) => {
            console.log(res);
            this.updateComplete.emit('completed');
          });
    });
  }
}
