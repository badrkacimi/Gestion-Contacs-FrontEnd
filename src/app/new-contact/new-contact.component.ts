import { Component, OnInit } from '@angular/core';
import {Contact} from '../../Model/model.contact';
import {ContactService} from '../../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact:any;
  mode:any=1;

  constructor(public contactService :ContactService) { }

  ngOnInit() {
  }
  saveContact() {
    this.contactService.saveContact(this.contact).subscribe(resp => {
        this.contact=resp;
        this.mode=2;
      }, err => {
        console.log(err);
      }
    )
  }

}
