import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider-section',
  templateUrl: './slider-section.component.html',
  styleUrls: ['./slider-section.component.scss']
})
export class SliderSectionComponent implements OnInit {

  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;

  public sliderItems = [
    {
      title: 'Nullam',
      content: 'Non nisi est sit amet facilisis magna. Donec ac odio tempor orci dapibus ultrices.'
    },
    {
      title: 'Nibh nisl',
      content: 'Condimentum id venenatis a condimentum vitae sapien pellentesque. At tellus at urna condimentum mattis pellentesque id nibh tortor.'
    },
    {
      title: 'Nam aliquam',
      content: 'Sem et tortor consequat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Elementum eu facilisis sed odio morbi.'
    }
  ];

  ngOnInit(): void {
  }

  getToPrev() {
    this.ngCarousel.prev();
  }

  goToNext() {
    this.ngCarousel.next();
  }
}
