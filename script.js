$(document).ready(function () {
  $('.slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: true,
    prevArrow: `<button class="slide-arrow prev-arrow btn btn-success disabled-t">Prev</button>`,
    nextArrow: `<button class="slide-arrow next-arrow">Next</button>`,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 400,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  });
});