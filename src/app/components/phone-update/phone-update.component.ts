import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-update',
  templateUrl: './phone-update.component.html',
  styleUrls: ['./phone-update.component.scss']
})
export class PhoneUpdateComponent implements OnInit {
  activePhoneList: string[] = [];
  phoneForm = this.formBuilder.group({
    username: ['', Validators.required],
    phoneNumber: ['', Validators.required, Validators.pattern(/(84|0[3|5|7|8|9])+([0-9]{8})\b/)]
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCurrentActivePhoneList();
  }

  getCurrentActivePhoneList(){}

  sendNewPhoneNumber() {

    let isExsitedPhoneNumber: boolean = !!this.phoneForm.controls.phoneNumber.value && this.activePhoneList.includes(this.phoneForm.controls.phoneNumber.value.trim())
    
    if(isExsitedPhoneNumber){
      //alert
    } else {
      //api
    }
  }

}
