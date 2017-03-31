import { Component, OnInit }      from '@angular/core';
import { Slide } from './slide';

@Component({
  selector: 'my-slider',
  templateUrl: './slider.component.html',
  styleUrls: [ './slider.component.scss' ]
})
export class SliderComponent implements OnInit {
  selectedSlide: Slide;
  slides: Slide[] = [
    {url: '/img/slider/slide1.png'},
    {url: '/img/slider/slide2.png'},
    {url: '/img/slider/slide3.png'},
  ];

  ngOnInit(): void {
    this.selectedSlide = this.slides[0];
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  setSlide(slide) {
    this.selectedSlide = slide;
  }

  nextSlide() {
    let nextSlideIndex = this.slides.indexOf(this.selectedSlide) + 1;
    if (nextSlideIndex >= this.slides.length) {
      nextSlideIndex = 0;
    }
    this.selectedSlide = this.slides[nextSlideIndex];
  }

  prevSlide() {
    let prevSlideIndex = this.slides.indexOf(this.selectedSlide) - 1;
    if (prevSlideIndex < 0) {
      prevSlideIndex = this.slides.length - 1;
    }
    this.selectedSlide = this.slides[prevSlideIndex];
  }
}
