import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousell',
  templateUrl: './carrousell.component.html',
  styleUrls: ['./carrousell.component.scss']
})
export class CarrousellComponent implements OnInit, AfterViewInit {
  slidesIndex = 1;
@Input() objImg: {};
  constructor() { }

  ngOnInit(): void {
 
  }
  ngAfterViewInit() {
    this.showSlides(this.slidesIndex);
   }
    plusSlides(n) {
     this.showSlides(this.slidesIndex += n);
   }
   
    currentSlide(n) {
     this.showSlides(this.slidesIndex = n);
   }
   
    showSlides(n) {
     let i;
     let slides: any = document.getElementsByClassName("carrousel_img");
     var dots = document.getElementsByClassName("dot");
     if (n > slides.length) {this.slidesIndex = 1}    
     if (n < 1) {this.slidesIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     
     slides[this.slidesIndex-1].style.display = "block";  
   }
 

}
