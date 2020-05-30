import { Component, OnInit } from '@angular/core';
import {Contactme} from './contactme';
@Component( {
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {

contact = new Contactme();

  contactform(){
    console.log(this.contact);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
