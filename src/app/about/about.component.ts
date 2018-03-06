import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  Infos={
    nom:"KACIMI BADR",
    position :"Elève-ingénieur INSEA",
    email :"badrvkacim@gmail.com"
  }
  constructor() { }

  ngOnInit() {
  }

}
