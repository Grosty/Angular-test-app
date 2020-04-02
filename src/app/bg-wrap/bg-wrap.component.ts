import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-wrap',
  templateUrl: './bg-wrap.component.html',
  styleUrls: ['./bg-wrap.component.scss']
})
export class BgWrapComponent implements OnInit {

  // bgImgUri = '../../assets/img/bg_1.png';
  appleBadgeUri = '../../assets/img/apple-max.png';
  googleBadgeUri = '../../assets/img/google-max.png';

  constructor() { }

  ngOnInit(): void {
  }

}
