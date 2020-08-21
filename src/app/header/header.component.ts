import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  scrollTo(elementId) {
    document.querySelector('#' + elementId).scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

}
