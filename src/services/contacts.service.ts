import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Container} from '@angular/compiler/src/i18n/i18n_ast';
import {Contact} from '../Model/model.contact';

@Injectable()
export class ContactService{

  constructor(public http:HttpClient){}

  getContacts(motCle :string,page :number,size: number){
    return this.http.get("http://localhost:8080/SearchContacts?mc="+motCle+"&page="+page+"&size="+size);
  }
  saveContact(contact:Contact ){
     return this.http.post("http://localhost:8080/Contacts",contact);
  }
  getAllContacts(){
    return this.http.get("http://localhost:8080/Contacts");
  }
  getContact(id:number) {
    return this.http.get("http://localhost:8080/Contacts/" + id);
  }
    updateContact(contact:Contact ){
      return this.http.put("http://localhost:8080/Contacts/"+contact.id,contact);
    }

  deleteContact(id:number){
    return this.http.delete("http://localhost:8080/Contacts/"+id);
  }
}
