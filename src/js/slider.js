new Swiper('.image-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  simulateTouch: true,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.image-slider',
  },
});
