import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhotoData, UserPhoneNumberData } from 'src/interfaces/interfaces';
import { baseURL } from './GlobalConstants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private baseURL = baseURL;

  getPhoneList(): Observable<UserPhoneNumberData | any> {
    return this.http.get(this.baseURL + 'phone', { responseType: "json"});
  }

  getPhotoList(target: string): Observable<PhotoData | any> {
    return this.http.get(this.baseURL + target, { responseType: "json"});
  }

  createNewUser(data: UserPhoneNumberData) : Observable<any>{
    return this.http.post(this.baseURL + 'phone', data, { responseType: "json"});
  }

  createNewPhoto(target: string, data: PhotoData) : Observable<any>{
    return this.http.post(this.baseURL + target, data, { responseType: "json"});
  }

  deleteUser(data: UserPhoneNumberData) : Observable<any>{
    return this.http.delete(this.baseURL + 'phone' + '/' + data.id, { responseType: "json"});
  }

  deletePhoto(target: string, data: PhotoData) : Observable<any>{
    return this.http.delete(this.baseURL + target + '/' + data.id, { responseType: "json"});
  }

  editUser(data: UserPhoneNumberData) : Observable<any>{
    return this.http.put(this.baseURL + 'phone/' + data.id, data, { responseType: "json"});
  }

  editPhoto(target: string, data: PhotoData) : Observable<any>{
    return this.http.put(this.baseURL + target + '/' + data.id, data, { responseType: "json"});
  }
}
