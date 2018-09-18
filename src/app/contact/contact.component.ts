import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact/contact.service';
import { ContactInfo } from '../model/contact-info';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactInfo = new ContactInfo();

  constructor(
    private contactInfoService: ContactService
  ) { }

  ngOnInit() {
    this.getContactInfo()
  }

  getContactInfo(): void {
    this.contactInfoService.getContactInfo()
      .subscribe(contact => this.contactInfo = contact);
  }

}
