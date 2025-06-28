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


document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('studentSlider');
  const sliderValue = document.getElementById('sliderValue');
  const displayPrice = document.getElementById('displayPrice');
  const facilityPrice = document.getElementById('facilityPrice');
  const planName = document.getElementById('planName');
  
  // Get all plan option buttons
  const planOptions = document.querySelectorAll('.plan-option');
  let currentPlan = 'monthly';
  
  // Constants for pricing
  const PRICING_PLANS = {
    monthly: {
      facilityPrice: 350,
      monthlyEquivalent: 350,
      planName: "Quick Stride Plan"
    },
    quarterly: {
      facilityPrice: 960,
      monthlyEquivalent: 320, // 960/3 = 320
      planName: "Quick Leap Plan"
    },
    halfyearly: {
      facilityPrice: 1800,
      monthlyEquivalent: 300, // 1800/6 = 300
      planName: "Halftime Plan"
    },
    yearly: {
      facilityPrice: 3000,
      monthlyEquivalent: 250, // 3000/12 = 250
      planName: "All Season Plan"
    }
  };
  
  // Update values when slider changes
  function updatePricing() {
    const students = parseInt(slider.value);
    sliderValue.textContent = students;
    
    const currentPlanData = PRICING_PLANS[currentPlan];
    
    // Calculate price per student
    const pricePerStudent = (currentPlanData.monthlyEquivalent / students).toFixed(2);
    
    // Update the display
    displayPrice.textContent = pricePerStudent;
    facilityPrice.textContent = currentPlanData.facilityPrice;
    planName.textContent = currentPlanData.planName;
  }
  
  // Initialize
  updatePricing();
  
  // Update when slider is moved
  slider.addEventListener('input', updatePricing);
  
  // Handle plan option clicks
  planOptions.forEach(option => {
    option.addEventListener('click', function() {
      // Remove active class from all options
      planOptions.forEach(opt => opt.classList.remove('active'));
      
      // Add active class to clicked option
      this.classList.add('active');
      
      // Update current plan
      currentPlan = this.getAttribute('data-plan');
      
      // Update pricing
      updatePricing();
    });
  });
});
  $(window).on("load", function () {
    /*Page Loader active
    ========================================================*/
    $("#preloader").fadeOut();

    // Initialize the student slider
    // initializeStudentSlider();

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
    // setTimeout(initializeStudentSlider, 1000);
  });
})(jQuery);