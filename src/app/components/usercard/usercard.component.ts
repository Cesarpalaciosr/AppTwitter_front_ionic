import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss'],
})
export class UsercardComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  
  goToProfile(/*userId*/){
    this.router.navigate(['/profile'/*, userId*/]);
  }

}
