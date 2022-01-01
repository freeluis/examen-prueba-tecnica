import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  scroller: any;
  constructor() { }
  @HostListener("scroll", ['$event'])
  
  ngOnInit(): void {
  }
  doSomethingOnInternalScroll(event:any){
    let scrollOffset = event.srcElement.scrollTop;
    this.scroller = scrollOffset;
    console.log(this.scroller);  
  }

}
