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
  maxBgInnerWidth = false;

  onResize(event) {
    this.maxBgInnerWidth = event.target.innerWidth > 991;
  }

  ngOnInit(): void {
    this.maxBgInnerWidth = (window.innerWidth > 991);
  }

}
