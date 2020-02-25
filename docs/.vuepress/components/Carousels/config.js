const BREAKPOINTS_3_SLIDES = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]

export const SETTINGS_3_SLIDES = {
    slidesToShow: 3,
    slidesToScroll:  1,
    arrows: false,
    dots: false,
    autoplay: false,
    responsive: BREAKPOINTS_3_SLIDES
}



export const SETTINGS_5_SLIDES = {
  slidesToShow: 5,
  slidesToScroll:  1,
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: BREAKPOINTS_3_SLIDES
}