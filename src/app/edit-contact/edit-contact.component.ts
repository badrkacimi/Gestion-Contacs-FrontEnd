import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contacts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

   contact :any;
    idContact:number;

  constructor( public contactservice:ContactService,public activatedRoute:ActivatedRoute,public route:Router) {

       this.idContact=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.contactservice.getContact(this.idContact)
      .subscribe(
        resp=>{this.contact=resp;},
        err=>{console.log(JSON.parse(err._body).message);
    })
  }
  updateContact(contact){
     this.contactservice.updateContact(this.contact)
       .subscribe(
         resp=>{
           this.contact=resp;
           console.log(resp);
          // this.route.navigate(['contacts']);
         },
         err=>{
           console.log(JSON.parse(err._body).message);
           alert("Probleme est servenu lors de la mise a jour des infos !");

         })
  }
}
