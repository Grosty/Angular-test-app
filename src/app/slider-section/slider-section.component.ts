import {
  Component,
  HostListener,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-slider-section',
  templateUrl: './slider-section.component.html',
  styleUrls: ['./slider-section.component.scss']
})
export class SliderSectionComponent implements OnInit {


  maxItemHeight = 0;
  activeSlider = 0;

  ngOnInit(): void {
    const items = Array.from(document.getElementsByClassName('slider-item'));
    if (items.length > 0) {
      const maxH =  Math.max(...items.map(it => it.getBoundingClientRect().height) );
      this.maxItemHeight = maxH;
    }
  }

  stepUp() {
    if (this.activeSlider === -2) {
      return null;
    } else {
      this.activeSlider--;
    }
  }

  stepDown() {
    if (this.activeSlider === 0) {
      return null;
    } else {
      this.activeSlider++;
    }
  }
}
