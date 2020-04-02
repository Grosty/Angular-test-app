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


  constructor() { }

  ngOnInit(): void {
  }

}
