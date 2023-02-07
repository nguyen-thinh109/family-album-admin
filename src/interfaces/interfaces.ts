export interface UserPhoneNumberData {
  username: string;
  phoneNumber: string;
  id?: string | number;
}

export interface PhotoData {
  title?: string;
  link: string;
  id: string | number;
}

export interface DialogMessage {
  title?: string;
  message: string;
}
