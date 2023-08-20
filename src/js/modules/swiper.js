import Swiper, {Navigation, Pagination, Scrollbar} from "swiper";

const menuSlider = new Swiper(".swiper-menu", {
  modules: [Navigation, Pagination, Scrollbar],
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  scrollbar: {
    enabled: false,
    el: ".swiper-scrollbar",
    hide: true,
  },
  pagination: false,
  allowTouchMove: true,
  // parallax: true,
  slidesPerView: 1,

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },

  breakpoints: {
    // 320: {},
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 2,
      allowTouchMove: false,
    },
    1536: {
      slidesPerView: 3,
    },
  },
});

const eventsSlider = new Swiper(".swiper-events", {
  modules: [Navigation, Pagination, Scrollbar],
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  scrollbar: {
    enabled: false,
    el: ".swiper-scrollbar",
    hide: true,
  },
  pagination: false,
  allowTouchMove: true,
  // parallax: true,
  slidesPerView: 1,
  // centeredSlides: true,

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },

  // breakpoints: {
  //   // 320: {},
  //   640: {
  //     slidesPerView: 2,
  //   },
  //   // 768: {},
  //   // 1024: {},
  //   1280: {
  //     slidesPerView: 2,
  //     allowTouchMove: false,
  //   },
  //   1536: {
  //     slidesPerView: 3,
  //   },
  // },
});

const interiorSlider = new Swiper(".swiper-interior", {
  modules: [Navigation, Pagination, Scrollbar],
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  scrollbar: {
    enabled: false,
    el: ".swiper-scrollbar",
    hide: true,
  },
  pagination: false,
  allowTouchMove: true,
  // parallax: true,
  slidesPerView: 1,
  // centeredSlides: true,

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },

  breakpoints: {
    // 320: {},
    // 640: {
    //   slidesPerView: 2,
    // },
    768: {
      slidesPerView: 2,
    },
    // 1024: {},
    1280: {
      slidesPerView: 3,
      allowTouchMove: false,
    },
    1536: {
      slidesPerView: 3,
    },
  },
});