import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitster',
  templateUrl: './twitster.page.html',
  styleUrls: ['./twitster.page.scss'],
})
export class TwitsterPage implements OnInit {
  readonly HEADER_TITLE = 'Twister';
  constructor() {}

  ngOnInit() {}
}