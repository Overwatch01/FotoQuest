import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isChecked = false;

  constructor() { }

  ngOnInit() {
  }

  changedOrderingMethod() {
    this.isChecked = !(this.isChecked);
    console.log(this.isChecked);
  }
}
