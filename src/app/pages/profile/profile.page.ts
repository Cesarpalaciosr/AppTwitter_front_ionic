import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  readonly HEADER_TITLE = 'Profile';
  constructor() {}
    status=true;
  ngOnInit() {}
}
