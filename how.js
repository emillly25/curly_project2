

// Initialize Swiper 

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 40,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
