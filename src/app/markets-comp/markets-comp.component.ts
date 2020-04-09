import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markets-comp',
  templateUrl: './markets-comp.component.html',
  styleUrls: ['./markets-comp.component.scss']
})
export class MarketsCompComponent implements OnInit {

  refAppleStore = '#';
  refPlayMarket = '#';
  imgAppleStore = '';
  imgPlayMarket = '';
  maxBgInnerWidth = false;



  onResize(event) {
    this.imgAppleStore = event.target.innerWidth > 991 ? '../../assets/img/apple-max.png' : '../../assets/img/apple-min.png';
    this.imgPlayMarket = event.target.innerWidth > 991 ? '../../assets/img/google-max.png' : '../../assets/img/google-min.png';
  }

  ngOnInit(): void {
    this.maxBgInnerWidth = (window.innerWidth > 991);
    if (this.maxBgInnerWidth) {
      this.imgAppleStore = '../../assets/img/apple-max.png';
      this.imgPlayMarket = '../../assets/img/google-max.png';
    } else {
      this.imgAppleStore = '../../assets/img/apple-min.png';
      this.imgPlayMarket = '../../assets/img/google-min.png';
    }
  }

}
