import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigateByUrl('login');
  }

  loadUserProfile() {
    this.router.navigateByUrl('userprofile');
  }

  loadHomePage() {
    this.router.navigateByUrl('home');
  }

  loadMultiForm() {
    this.router.navigateByUrl('multi');
  }

}
