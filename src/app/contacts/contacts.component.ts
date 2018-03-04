import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {ContactService} from '../../services/contacts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../../Model/model.contact';

@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  motCle:string="";
  Currentpage: number=0;
  size:number=5;
  pages:Array<number>;

  constructor(public http:HttpClient, public contactService :ContactService,public route:Router) {
  }

  ngOnInit() {

  }

   doSearch(){
    this.contactService.getContacts(this.motCle,this.Currentpage,this.size)
      .subscribe(resp=>{
        this.pageContacts=resp;
        this.pages=new Array(resp.totalPages);
        },err=>{console.log(err);});
  }

  Chercher() {
    this.doSearch();
  }

  gotoPage(i:number){
    this.Currentpage=i;
    this.doSearch();
}

  onEditContact(id :number){
    this.route.navigate(['edit-contact',id])
 }

  onDeleteContact(c:Contact){
    this.contactService.deleteContact(c.id).subscribe(resp=>{
       alert("Wach Sur olala !");
       this.pageContacts.content.splice(this.pageContacts.content.indexOf(c),1);
      },
        err=>{alert("Kayn chi Mushkil a sat(a)!");
    console.log(JSON.parse(err._body).message)})
  }

}
