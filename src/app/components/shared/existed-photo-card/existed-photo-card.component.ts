import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PhotoData } from 'src/interfaces/interfaces';
import { ApiService } from 'src/app/config/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from '../delete-item/delete-item.component';
import { EditItemDialogComponent } from '../edit-item-dialog/edit-item-dialog.component';

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

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit() {}

  editPhoto() {
    const dialog = this.dialog.open(EditItemDialogComponent, {
      data: this.photoItemData,
      width: '320px',
    });

    dialog.afterClosed().subscribe((res) => {
      if (res && res.link != this.photoItemData.link) {
        this.apiService.editPhoto(this.currentAlbum, this.photoItemData)
        .subscribe((respond) => {
          console.log(respond);
          this.updateComplete.emit('completed');
        });
      }
    });
  }

  deletePhoto() {
    const dialog = this.dialog.open(DeleteItemComponent, {
      width: '320px',
    });

    dialog.afterClosed().subscribe((r) => {
      if (r)
        this.apiService
          .deletePhoto(this.currentAlbum, this.photoItemData)
          .subscribe((res) => {
            console.log(res);
            this.updateComplete.emit('completed');
          });
    });
  }
}
