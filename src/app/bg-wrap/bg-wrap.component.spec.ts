import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgWrapComponent } from './bg-wrap.component';

describe('BgWrapComponent', () => {
  let component: BgWrapComponent;
  let fixture: ComponentFixture<BgWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
