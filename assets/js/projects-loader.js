/**
 * Projects Loader
 * This script loads project data from the JSON file and dynamically generates project cards
 */

document.addEventListener('DOMContentLoaded', function() {
  // Function to fetch the projects data from the JSON file
  function fetchProjects() {
    fetch('assets/updated_projects.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(projects => {
        // Once we have the projects data, generate the carousel items
        generateProjectCards(projects);
        // Reinitialize the owl carousel after adding the new items
        initializeCarousel();
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }

  // Function to generate project cards from the JSON data
  function generateProjectCards(projects) {
    const carousel = document.getElementById('projects-carousel');
    
    // Clear any existing content
    carousel.innerHTML = '';
    
    // Generate a card for each project in the JSON
    projects.forEach(project => {
      // Create the project card HTML
      const projectCard = `
        <div class="item">
          <div class="enhanced-project-card">
            <div class="project-content">
              <div class="project-info">
                <h3 class="enhanced-project-title">
                  <a href="${project.previewLink || '#'}" target="_blank" title="${project.title}">${project.title}</a>
                </h3>
                <p class="enhanced-project-description">
                  ${project.description}
                </p>
                <div class="tech-stack-enhanced">
                  ${project.technologies.map(tech => `<span class="tech-tag-enhanced">${tech}</span>`).join('')}
                </div>
                <div class="project-metrics">
                  ${project.metrics.map(metric => `
                    <div class="metric-item-enhanced">
                      <div class="metric-value-enhanced">${metric.value}</div>
                      <div class="metric-label-enhanced">${metric.name}</div>
                    </div>
                  `).join('')}
                </div>
                ${project.previewLink ? `<div class="mt-3">
                  <a href="${project.previewLink}" target="_blank" class="btn btn-common">Preview Project</a>
                </div>` : ''}
              </div>
              <div class="project-image">
                <img src="${project.projectImage.replace('.svg', '.png')}" alt="${project.title} Project" class="project-img" onerror="this.onerror=null; this.src='assets/img/Project Mockups/Project_Attendify.png';">
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Add the project card to the carousel
      carousel.innerHTML += projectCard;
    });
  }

  // Function to initialize the owl carousel
  function initializeCarousel() {
    // Get the carousel element
    var projectsOwl = $("#projects-carousel");
    
    // Destroy the existing carousel if it exists
    if (projectsOwl.data('owl.carousel')) {
      projectsOwl.trigger('destroy.owl.carousel');
    }
    
    // Initialize the carousel with the same settings as in main.js
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
  }

  // Start loading the projects
  fetchProjects();
});