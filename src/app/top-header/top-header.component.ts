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
  links = ['Lorem ipsum 1', 'Lorem ipsum 2', 'Lorem ipsum 3'];
  activeLink = 0;
  scrolling = false;
  maxBgInnerWidth = false;
  navMenuOpen = false;
  isLoaded = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    this.scrolling = (pageYOffset > 50);
    this.navMenuOpen = false;
  }

  ngOnInit(): void {
    this.maxBgInnerWidth = (window.innerWidth > 991);
  }

  onResize(event) {
    this.maxBgInnerWidth  = event.target.innerWidth > 991;
    if (event.target.innerWidth > 991) {
      this.navMenuOpen = false;
    }
  }

  toggleLink(idx) {
    this.activeLink = idx;
  }
  toggleNavBtn() {
    this.navMenuOpen = !this.navMenuOpen;
    this.isLoaded = true;
  }
}
