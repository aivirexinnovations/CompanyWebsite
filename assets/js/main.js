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
  // Only run pricing code if the elements exist (for pricing page)
  const slider = document.getElementById('studentSlider');
  if (!slider) return; // Exit if pricing elements don't exist
  
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
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
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

    /* Projects Carousel 
    ========================================================*/
    var projectsOwl = $("#projects-carousel");
    projectsOwl.owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      center: true,
      margin: 30,
      mouseDrag: true,
      touchDrag: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        960: {
          items: 1,
        },
        1200: {
          items: 1,
        },
        1920: {
          items: 1,
        },
      },
    });
 
    /* WhatsApp button is now handled by direct link - no JavaScript needed */
  });

  // Add a second initialization attempt using jQuery's document ready
  $(document).ready(function() {
    // This gives us a second chance to initialize if window.load hasn't triggered yet
    // setTimeout(initializeStudentSlider, 1000);
  });
})(jQuery);/* ===
======================================================================= 
   Enhanced Components JavaScript - Integrated from enhanced-components.js
   ========================================================================== */

// Initialize enhanced components when DOM is ready
$(document).ready(function() {
  initHeroParticles();
  initRollingNumbers();
  initProcessParticles();
});

// Hero Section Particle System
function initHeroParticles() {
  if (window.tsParticles && window.tsParticles.load) {
    console.log('Initializing hero particles...');
    try {
      window.tsParticles.load('tsparticles', {
      fullScreen: { enable: false },
      background: { color: 'transparent' },
      style: { 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0 
      },
      particles: {
        number: { 
          value: window.innerWidth < 768 ? 33 : 55, 
          density: { enable: true, area: 800 } 
        },
        color: { 
          value: ['rgb(33, 165, 237)', '#1976d2', '#fff', '#abacae'] 
        },
        shape: {
          type: 'char',
          character: [
            { value: '{}', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '</>', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '()', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '[]', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '<>', font: 'Space Grotesk', style: '', weight: '500' },
            { value: ':=', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '=>', font: 'Space Grotesk', style: '', weight: '500' },
            { value: ';', font: 'Space Grotesk', style: '', weight: '500' },
            { value: ':', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '=', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '&&', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '||', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '!', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '?', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '#', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '@', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '$', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '%', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '*', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '^', font: 'Space Grotesk', style: '', weight: '500' },
            { value: '~', font: 'Space Grotesk', style: '', weight: '500' }
          ]
        },
        opacity: { 
          value: 0.528,
          random: true,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: { 
          value: { min: 8, max: 18 },
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 5,
            sync: false
          }
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
          attract: { enable: false }
        }
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: { 
            enable: true, 
            mode: ['repulse'] 
          },
          resize: true
        },
        modes: {
          repulse: { 
            distance: 100, 
            duration: 0.4 
          }
        }
      },
      detectRetina: true
    });
    } catch (error) {
      console.warn('Hero particles initialization failed:', error);
    }
  } else {
    console.warn('tsParticles not loaded');
  }
}

// Rolling Numbers Animation
function initRollingNumbers() {
  const heroStatsSection = document.querySelector('.hero-stats');
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  function animateCounter(el, target, duration = 2000) {
    let start = 0;
    let startTime = null;
    
    function updateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const value = Math.floor(easeOutQuart * (target - start) + start);
      
      el.textContent = value;
      el.style.animation = 'countUp 0.3s ease-out';
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = target;
      }
    }
    
    requestAnimationFrame(updateCounter);
  }

  function startAnimation() {
    if (!animated && statNumbers.length > 0) {
      statNumbers.forEach((el, index) => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        // Stagger the animations
        setTimeout(() => {
          animateCounter(el, target);
        }, index * 200 + 1000); // Add 1 second delay for hero section to load
      });
      animated = true;
    }
  }

  // Since stats are now in hero section, start animation after a short delay
  if (heroStatsSection && statNumbers.length > 0) {
    setTimeout(startAnimation, 500); // Start animation after 500ms
  }
}

// Process Section Particles
function initProcessParticles() {
  const processParticles = document.getElementById('process-particles');
  
  if (processParticles && window.particlesJS) {
    try {
      window.particlesJS('process-particles', {
      "particles": {
        "number": {
          "value": window.innerWidth < 768 ? 44 : 66,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "rgb(33, 165, 237)"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          }
        },
        "opacity": {
          "value": 0.396,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0.5,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "rgb(33, 165, 237)",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1.5,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 0.5
            }
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true
    });
    } catch (error) {
      console.warn('Particles.js initialization failed:', error);
    }
  }
}

// Smooth scrolling for enhanced buttons
$(document).on('click', 'a[href^="#"]', function(e) {
  e.preventDefault();
  const target = $($(this).attr('href'));
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 800);
  }
});

// Responsive particle adjustments
$(window).on('resize', function() {
  // Reinitialize particles on resize for better performance
  setTimeout(() => {
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom.forEach(pJS => {
        if (pJS.pJS) {
          pJS.pJS.particles.number.value = window.innerWidth < 768 ? 44 : 66;
          pJS.pJS.fn.particlesRefresh();
        }
      });
    }
  }, 100);
});

// Performance optimization: Pause particles when not visible
let heroObserver;
let processObserver;

if ('IntersectionObserver' in window) {
  // Hero particles observer
  heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.target.id === 'tsparticles') {
        if (entry.isIntersecting) {
          // Resume particles
          if (window.tsParticles && window.tsParticles.domItem(0)) {
            window.tsParticles.domItem(0).play();
          }
        } else {
          // Pause particles
          if (window.tsParticles && window.tsParticles.domItem(0)) {
            window.tsParticles.domItem(0).pause();
          }
        }
      }
    });
  }, { threshold: 0.1 });

  // Process particles observer
  processObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.target.id === 'process-particles') {
        if (entry.isIntersecting) {
          // Resume particles
          if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.fn.vendors.start();
          }
        } else {
          // Pause particles
          if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.fn.vendors.stop();
          }
        }
      }
    });
  }, { threshold: 0.1 });

  // Start observing when elements are available
  setTimeout(() => {
    const heroParticles = document.getElementById('tsparticles');
    const processParticles = document.getElementById('process-particles');
    
    if (heroParticles && heroObserver) {
      heroObserver.observe(heroParticles);
    }
    
    if (processParticles && processObserver) {
      processObserver.observe(processParticles);
    }
  }, 1000);
}

// Cleanup function
$(window).on('beforeunload', function() {
  if (heroObserver) heroObserver.disconnect();
  if (processObserver) processObserver.disconnect();
});

