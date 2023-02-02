import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-album-update',
  templateUrl: './album-update.component.html',
  styleUrls: ['./album-update.component.scss']
})
export class AlbumUpdateComponent implements OnInit {

  currentTarget: string = '';
  activeTabIndex: number = 0;
  albumForm: FormGroup = this.formBuilder.group({
    title: [''],
    link: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  updateCurrentTabTarget(number: number): string {
    this.activeTabIndex = number;
    let tabList = ['collective', 'banoi', 'thu', 'hang'];
    return this.currentTarget = tabList[this.activeTabIndex];
  }

  sendNewImage(): void {
    console.log(this.albumForm.value)

    this.albumForm.reset();
  }

}
