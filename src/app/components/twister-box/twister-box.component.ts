import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'twister-box',
  templateUrl: './twister-box.component.html',
  styleUrls: ['./twister-box.component.scss'],
})
export class TwisterBoxComponent implements OnInit {
  tweet:string=''
  constructor(private router:Router) {}
  
  ngOnInit() {}
  
  public simpleString:string = 'hola soy un string'
  handleChange(event: any): void {
    this.tweet = event.detail.value as string;
    // console.log(this.tweet);
  }

  postTweet(){
    console.log(this.tweet);
    this.router.navigate(
      ['/home'])
  }
}
