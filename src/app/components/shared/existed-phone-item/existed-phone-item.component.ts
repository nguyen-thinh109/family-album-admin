import { Component, Input, OnInit } from '@angular/core';
import { UserPhoneNumberData } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-existed-phone-item',
  templateUrl: './existed-phone-item.component.html',
  styleUrls: ['./existed-phone-item.component.scss']
})
export class ExistedPhoneItemComponent implements OnInit {

  @Input() phoneData: UserPhoneNumberData = {
    username: '',
    phoneNumber: ''
  };

  @Input() isEvenIndex: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
