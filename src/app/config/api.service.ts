import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhotoData, UserPhoneNumberData } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL: string = 'https://odd-undershirt-foal.cyclic.app/';
  constructor(private http: HttpClient) { }

  getPhoneList(): Observable<UserPhoneNumberData | any> {
    return this.http.get(this.baseURL + 'phone');
  }

  getPhotoList(target: string): Observable<PhotoData | any> {
    return this.http.get(this.baseURL + target);
  }
}
