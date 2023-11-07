import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  readonly HEADER_TITLE = 'Home';
  constructor(private router: Router) {}
  goToTwitster() {
    this.router.navigate(['/twitster']);
  }
  ngOnInit() {}
}
