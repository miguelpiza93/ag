import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactInfo } from '../../model/contact-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactinfoUrl = 'api/contact';

  getContactInfo(): Observable<ContactInfo> {
    return this.http.get<ContactInfo>(this.contactinfoUrl);
  }

  constructor(
    private http: HttpClient
  ) { }
}
