import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

//Import images for navs

export class Carousel {
  constructor($carousel) {
    this.$carousel = $carousel;

    this.options = {
      ...this.parseUserOptions()
    };

    this.init();
  }

  parseUserOptions() {
    const slider = this.$carousel.data('type');

    const options = {};

    return options;
  }

  init() {
    this.$carousel.owlCarousel({
      ...this.options
    });
  }
}
