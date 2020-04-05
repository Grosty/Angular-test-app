import {
  Component,
  HostListener,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  title = 'Logo';
  // links = ['Home', 'Link 1', 'Link 2'];
  scrolling = false;
  currentClass = "navbar navbar-expand-sm navbar-dark  fixed-top py-0";


  @HostListener('window:scroll', ['$event'])
  onScroll(){
    this.scrolling = (pageYOffset > 100);
    // console.log(this.scrolling);
  }

  ngOnInit(): void {
  }

}
