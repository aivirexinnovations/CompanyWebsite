(function ($) {
  "use strict";
  const muteBtn = document.querySelector(".mute-container");
  const muteBtnSrc = document.querySelector(".mute-container img");
  const mob_desk = document.querySelector(".bg-video-desk > video");
  const mob_video = document.querySelector(".bg-video-mob  > video");


  document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("userRange");
    const sliderValue = document.getElementById("sliderValue");
    const monthly = document.getElementById("monthly");
    const yearly = document.getElementById("yearly");
  
    // Check if all elements are found before proceeding
    if (!slider || !sliderValue || !monthly || !yearly) {
      console.error("One or more elements not found in the DOM");
      return;
    }
  
    slider.addEventListener("input", function () {
      // Update displayed user count
      sliderValue.textContent = `${slider.value} Users`;
      document.getElementById("userCount").textContent = slider.value;
      // document.getElementById("userCountMonthly").textContent = slider.value;
      // document.getElementById("userCountAnnual").textContent = slider.value;
  
          // Pricing conditions
    if (slider.value > 350 && slider.value < 700) {
      monthly.innerHTML = "₹ 500<span> /month</span>";
      yearly.innerHTML = "₹ 4500<span> /year</span>";
    } else if (slider.value >= 700) {
      monthly.innerHTML = "₹ 650<span> /month</span>";
      yearly.innerHTML = "₹ 5500<span> /year</span>";
    } else {
      monthly.innerHTML = "₹ 350<span> /month</span>";
      yearly.innerHTML = "₹ 3000<span> /year</span>"; // Corrected year value
    }
  });

  
    // JavaScript-driven fill effect for slider
    slider.addEventListener("input", function () {
      const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
      slider.style.background = `linear-gradient(to right, #007bff ${value}%, #ddd ${value}%)`;
    });
  });
  

  // Mute button
  muteBtn.addEventListener("click", function () {
    muteBtnSrc.src = "assets/img/unmute.png";
    if (mob_desk.muted === false && mob_video.muted === false) {
      mob_desk.muted = true;
      mob_video.muted = true;
      muteBtnSrc.src = "assets/img/mute.png";
    } else {
      mob_desk.muted = false;
      mob_video.muted = false;
      muteBtnSrc.src = "assets/img/unmute.png";
    }
  });

  $(window).on("load", function () {
    /*Page Loader active
  ========================================================*/
    $("#preloader").fadeOut();

    // Sticky Nav
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".scrolling-navbar").addClass("top-nav-collapse");
      } else {
        $(".scrolling-navbar").removeClass("top-nav-collapse");
      }
    });

    // one page navigation
    $(".navbar-nav").onePageNav({
      currentClass: "active",
    });

    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    function close_toggle() {
      if ($(window).width() <= 768) {
        $(".navbar-collapse a").on("click", function () {
          $(".navbar-collapse").collapse("hide");
        });
      } else {
        $(".navbar .navbar-inverse a").off("click");
      }
    }
    close_toggle();
    $(window).resize(close_toggle);

    /* WOW Scroll Spy
    ========================================================*/
    var wow = new WOW({
      //disabled for mobile
      mobile: false,
    });

    wow.init();

    /* Testimonials Carousel 
    ========================================================*/
    var owl = $("#testimonials");
    owl.owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      center: true,
      margin: 15,
      mouseDrag:true,
      touchDrag:true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        960: {
          items: 3,
        },
        1200: {
          items: 3,
        },
        1920: {
          items: 3,
        },
      },
    });
 

    /* Back Top Link active
    ========================================================*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $(".back-to-top").fadeIn(400);
      } else {
        $(".back-to-top").fadeOut(400);
      }
    });

    $(".back-to-top").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  });
})(jQuery);
