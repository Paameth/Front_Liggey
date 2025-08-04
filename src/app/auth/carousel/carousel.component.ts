import { Component, Input, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() items: CarouselItem[] = [];
  @Input() autoplay = false;
  @Input() autoplayInterval = 5000;
  @Input() infinite = true;

  currentIndex = signal(0);
  private autoplayTimer?: number;

  ngOnInit() {
    if (this.autoplay) this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  nextSlide() {
    if (this.currentIndex() < this.items.length - 1) {
      this.currentIndex.set(this.currentIndex() + 1);
    } else if (this.infinite) {
      this.currentIndex.set(0);
    }
    this.resetAutoplay();
  }

  previousSlide() {
    if (this.currentIndex() > 0) {
      this.currentIndex.set(this.currentIndex() - 1);
    } else if (this.infinite) {
      this.currentIndex.set(this.items.length - 1);
    }
    this.resetAutoplay();
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
    this.resetAutoplay();
  }

  private startAutoplay() {
    this.autoplayTimer = window.setInterval(() => {
      this.nextSlide();
    }, this.autoplayInterval);
  }

  private stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
  }

  private resetAutoplay() {
    if (this.autoplay) {
      this.stopAutoplay();
      this.startAutoplay();
    }
  }
}
