import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwisterBoxComponent } from 'src/app/components/twister-box/twister-box.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  readonly HEADER_TITLE = 'Home';
  constructor(private router: Router) {}
  // console.log(simpleString);
  
  goToTwitster() {
    this.router.navigate(['/twitster']);
  }
 /* getMyVar(){
    console.log(this.tweets.simpleString);
    return this.tweets.simpleString;
  }*/
  ngOnInit() {}
}
