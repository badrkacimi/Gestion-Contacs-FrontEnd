import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contacts.service';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../../Model/model.contact';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactservice:ContactService,http:HttpClient) { }

   contact :any;
  mode:any=1;

  ngOnInit() {
  }
  onSave(dataForm){
    this.contactservice.saveContact(dataForm).subscribe(resp=>{
      this.mode=2;
      this.contact=resp;
      },

        err=>{
      console.log(JSON.parse(err._body).messages);
      alert("Un probleme est servenu lors de mise a jour des infos")
    })

  }
}
