(function ($) {
  "use strict";
  const muteBtn = document.querySelector(".mute-container");
  const muteBtnSrc = document.querySelector(".mute-container img");
  const mob_desk = document.querySelector(".bg-video-desk > video");
  const mob_video = document.querySelector(".bg-video-mob  > video");

  // Mute button
  if (muteBtn) {
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
  }

  // Add this to your main.js file
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('studentSlider');
  const sliderValue = document.getElementById('sliderValue');
  const displayPrice = document.getElementById('displayPrice');
  const facilityPrice = document.getElementById('facilityPrice');
  const billingToggle = document.getElementById('billingToggle');
  const monthlyToggle = document.getElementById('monthlyToggle');
  const yearlyToggle = document.getElementById('yearlyToggle');
  
  // Constants for pricing
  const MONTHLY_FACILITY_PRICE = 350;
  const YEARLY_FACILITY_PRICE = 3000;
  const YEARLY_MONTHLY_EQUIVALENT = 250; // 3000/12 = 250
  
  // Update values when slider changes
  function updatePricing() {
    const students = parseInt(slider.value);
    sliderValue.textContent = students;
    
    // Determine if monthly or yearly is selected
    const isYearly = billingToggle.checked;
    
    // Calculate price per student
    let pricePerStudent, facility;
    
    if (isYearly) {
      pricePerStudent = (YEARLY_MONTHLY_EQUIVALENT / students).toFixed(2);
      facility = YEARLY_FACILITY_PRICE;
    } else {
      pricePerStudent = (MONTHLY_FACILITY_PRICE / students).toFixed(2);
      facility = MONTHLY_FACILITY_PRICE;
    }
    
    // Update the display
    displayPrice.textContent = pricePerStudent;
    facilityPrice.textContent = facility;
  }
  
  // Initialize
  updatePricing();
  
  // Update when slider is moved
  slider.addEventListener('input', updatePricing);
  
  // Update when billing toggle is changed
  billingToggle.addEventListener('change', function() {
    if (this.checked) {
      // Yearly is selected
      monthlyToggle.classList.remove('active');
      yearlyToggle.classList.add('active');
    } else {
      // Monthly is selected
      yearlyToggle.classList.remove('active');
      monthlyToggle.classList.add('active');
    }
    updatePricing();
  });
  
  // Allow clicking on the text labels to toggle
  monthlyToggle.addEventListener('click', function() {
    billingToggle.checked = false;
    monthlyToggle.classList.add('active');
    yearlyToggle.classList.remove('active');
    updatePricing();
  });
  
  yearlyToggle.addEventListener('click', function() {
    billingToggle.checked = true;
    yearlyToggle.classList.add('active');
    monthlyToggle.classList.remove('active');
    updatePricing();
  });
});

  $(window).on("load", function () {
    /*Page Loader active
    ========================================================*/
    $("#preloader").fadeOut();

    // Initialize the student slider
    initializeStudentSlider();

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
      mouseDrag: true,
      touchDrag: true,
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

  // Add a second initialization attempt using jQuery's document ready
  $(document).ready(function() {
    // This gives us a second chance to initialize if window.load hasn't triggered yet
    setTimeout(initializeStudentSlider, 1000);
  });
})(jQuery);