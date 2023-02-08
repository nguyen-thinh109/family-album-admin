import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/config/api.service';
import { PhotoData } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-album-update',
  templateUrl: './album-update.component.html',
  styleUrls: ['./album-update.component.scss'],
})
export class AlbumUpdateComponent implements OnInit {

  tabList: string[] = ['collective', 'banoi', 'thu', 'hang'];
  currentTarget: string = '';
  activeTabIndex: number = 0;
  albumForm: FormGroup = this.formBuilder.group({
    title: [''],
    link: ['', Validators.required],
  });
  isPhotosShown: boolean = false;

  $albumData!: Observable<PhotoData[]>;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getFullAlbum();
  }

  updateCurrentTabTarget(number: number): void {
    this.activeTabIndex = number;
    this.currentTarget = this.tabList[this.activeTabIndex];

    this.getFullAlbum();
  }

  sendNewImage(): void {
    console.log(this.albumForm.value);

    this.albumForm.reset();
  }

  showDetails(e: boolean): void {
    this.isPhotosShown = e;
  }

  getFullAlbum(): void {
    this.apiService.getPhotoList(this.tabList[this.activeTabIndex]).subscribe((res: PhotoData[]) => {
      this.$albumData = of(res);
    })
  }

  updateComplete(e: string){
    this.getFullAlbum();
  }
}
