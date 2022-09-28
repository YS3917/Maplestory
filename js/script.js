$(document).ready(function () {
  window.onload = function () {
    //   목록 역할
    var swVisualList = new Swiper(".sw-visual-list", {
      // loop: true,
      spaceBetween: 0,
      slidesPerView: 4,
      allowTouchMove: false,
      freeMode: true,
      // slidesPerGroup: 1,
      pagination: {
        el: ".sw-visual-list-control .swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".sw-visual-list-control .swiper-button-next",
        prevEl: ".sw-visual-list-control .swiper-button-prev",
      },
    });

    // 비주얼 역할
    var swVisual = new Swiper(".sw-visual", {
      // loop: true,
      spaceBetween: 0,
      effect: "fade",
      thumbs: {
        swiper: swVisualList,
      },
    });

    let swVisualListA = $(".sw-visual-list a");
    let swVisualSlide = $(".sw-visual-list .swiper-slide");
    $.each(swVisualListA, function (index, item) {
      $(this).click(function (event) {
        event.preventDefault();
        // let num = $(this).attr("data-slide-num");
        // swVisual.slideTo(num);
        // swVisualSlide.removeClass("swiper-slide-active");
      });
    });

    var cashItem = new Swiper(".cash-item", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });
  };

  let header = $(".header");
  let depth1Li = $(".depth1 > li");
  let headerbg = $(".header-bg");
  let depth2 = $(".depth2");

  depth1Li.mouseenter(function () {
    headerbg.css("display", "block");
    depth2.css("display", "block");
  });

  depth1Li.mouseleave(function () {
    headerbg.css("display", "none");
    depth2.css("display", "none");
  });

  $(".left-menu").click(function () {
    console.log("left-menu", $(this));
    $(".ham-menu").toggleClass("ham-menu-open ");
    $(".ham-left").toggleClass("ham-left-open");
  });

  $(".menu-close-btn").click(function () {
    $(".ham-menu").removeClass("ham-menu-open");
    $(".ham-left").removeClass("ham-left-open");
  });
});
