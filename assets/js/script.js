'use strict';

// Footer functionality
document.addEventListener('DOMContentLoaded', function() {
  // Update copyright year
  const copyrightYear = document.getElementById('copyright-year');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }

  // Add interactive effects for footer
  const footer = document.querySelector('.footer');
  const developerName = document.querySelector('.developer-name');
  const heart = document.querySelector('.heart');
  const techBadge = document.querySelector('.tech-badge');

  // Enhanced hover effects
  if (footer) {
    footer.addEventListener('mouseenter', function() {
      this.style.borderTopColor = '#FFD700';
      this.style.transition = 'border-top-color 0.3s ease';
    });
    
    footer.addEventListener('mouseleave', function() {
      this.style.borderTopColor = 'var(--orange-yellow-crayola)';
    });
  }

  // Developer name hover effect
  if (developerName) {
    developerName.addEventListener('mouseenter', function() {
      this.style.animationDuration = '1s';
    });
    
    developerName.addEventListener('mouseleave', function() {
      this.style.animationDuration = '3s';
    });
  }

  // Heart click effect
  if (heart) {
    heart.addEventListener('click', function() {
      this.style.animation = 'none';
      setTimeout(() => {
        this.style.animation = 'heartbeat 1.2s ease-in-out infinite';
      }, 10);
      
      // Create a temporary scale effect
      this.style.transform = 'scale(1.5)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
    });
  }

  // Tech badge click effect
  if (techBadge) {
    techBadge.addEventListener('click', function() {
      this.style.animation = 'rotateText 1s linear infinite';
      setTimeout(() => {
        this.style.animation = 'rotateText 4s linear infinite';
      }, 1000);
    });
  }

  // Scrolling email functionality
  const emailLinks = document.querySelectorAll('.email-scroll');
  emailLinks.forEach(emailLink => {
    const email = emailLink.getAttribute('data-email');
    
    if (!email) return;
    
    // Check if email is long enough to need scrolling (more than 20 characters)
    if (email.length > 20) {
      // Create a container for scrolling
      const container = document.createElement('span');
      container.className = 'scrolling-container';
      
      // Create the scrolling text
      const scrollingText = document.createElement('span');
      scrollingText.className = 'scrolling-text';
      scrollingText.textContent = email;
      
      // Replace the original link content
      emailLink.textContent = '';
      emailLink.appendChild(container);
      container.appendChild(scrollingText);
      
      // Add hover effects to pause scrolling
      emailLink.addEventListener('mouseenter', function() {
        if (scrollingText) {
          scrollingText.style.animationPlayState = 'paused';
        }
      });
      
      emailLink.addEventListener('mouseleave', function() {
        if (scrollingText) {
          scrollingText.style.animationPlayState = 'running';
        }
      });
      
      // Add click to copy functionality
      emailLink.addEventListener('click', function(e) {
        e.preventDefault();
        navigator.clipboard.writeText(email).then(() => {
          // Show temporary feedback
          const originalText = scrollingText.textContent;
          scrollingText.textContent = 'Copied!';
          scrollingText.style.color = '#50C878';
          
          setTimeout(() => {
            scrollingText.textContent = originalText;
            scrollingText.style.color = '';
          }, 1500);
        });
      });
    } else {
      // For short emails, just add click to copy functionality
      emailLink.addEventListener('click', function(e) {
        e.preventDefault();
        navigator.clipboard.writeText(email).then(() => {
          // Show temporary feedback
          const originalText = emailLink.textContent;
          emailLink.textContent = 'Copied!';
          emailLink.style.color = '#50C878';
          
          setTimeout(() => {
            emailLink.textContent = originalText;
            emailLink.style.color = '';
          }, 1500);
        });
      });
    }
  });

  // Experience pill hover tooltip
  const experiencePill = document.querySelector('.experience-pill');
  if (experiencePill) {
    experiencePill.addEventListener('mouseenter', function() {
      this.title = '3+ years of professional experience in Software Quality Assurance';
    });
  }
});

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// project modal variables
const projectItems = document.querySelectorAll("[data-filter-item]");
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectModalCloseBtn = document.querySelector("[data-project-modal-close-btn]");
const projectOverlay = document.querySelector("[data-project-overlay]");

// project modal content variables
const projectCarousel = document.querySelector("[data-project-carousel]");
const projectTitleElement = document.querySelector("[data-project-title]");
const projectCategory = document.querySelector("[data-project-category]");
const projectDescription = document.querySelector("[data-project-description]");
const projectTechnologies = document.querySelector("[data-project-technologies]");
const projectLinks = document.querySelector("[data-project-links]");
const carouselPrev = document.querySelector("[data-carousel-prev]");
const carouselNext = document.querySelector("[data-carousel-next]");
const carouselCounter = document.querySelector("[data-carousel-counter]");

// project data storage
let currentProjectData = null;
let currentImageIndex = 0;
let autoScrollInterval = null;

// project data mapping (simulating the Flutter data structure)
// Note: Some project names exist in multiple sections, so we handle them by section context
const projectDataMap = {
  // Certification Section Projects
  "advance automaton & istqb at it training bd": {
    title: "Advance Automaton & ISTQB at It Training BD",
    category: "Professional",
    description: "Comprehensive training program covering advanced automation testing techniques and ISTQB certification preparation. Focuses on practical implementation of testing frameworks and best practices.",
    images: ["./assets/images/project-1.jpg"],
    keywords: ["Automation", "ISTQB", "Testing", "Selenium"],
    links: [
      { name: "Certificate", url: "#", icon: null },
      { name: "Details", url: "#", icon: null }
    ]
  },
  "sqa and cyber security at it training bd": {
    title: "SQA and Cyber Security at It Training BD",
    category: "Professional",
    description: "Professional training in Software Quality Assurance combined with Cyber Security fundamentals. Covers security testing, vulnerability assessment, and secure SDLC practices.",
    images: ["./assets/images/project-2.png"],
    keywords: ["SQA", "Cyber Security", "Security Testing"],
    links: [
      { name: "Certificate", url: "#", icon: null },
      { name: "Details", url: "#", icon: null }
    ]
  },
  "java at nasscom it-ites sector skill council": {
    title: "Java at NASSCOM IT-ITES Sector Skill Council",
    category: "Professional",
    description: "Java programming certification from NASSCOM IT-ITES Sector Skill Council. Focuses on core Java concepts, object-oriented programming, and enterprise application development.",
    images: ["./assets/images/project-9.png"],
    keywords: ["Java", "Programming", "OOP"],
    links: [
      { name: "Certificate", url: "#", icon: null },
      { name: "Details", url: "#", icon: null }
    ]
  },
  "software testing & quality assurance at bitm": {
    title: "Software Testing & Quality Assurance at BITM",
    category: "Professional",
    description: "Comprehensive software testing and quality assurance training program at BITM. Covers manual testing, test planning, test case design, and defect management.",
    images: ["./assets/images/project-7.png"],
    keywords: ["Manual Testing", "QA", "Test Planning"],
    links: [
      { name: "Certificate", url: "#", icon: null },
      { name: "Details", url: "#", icon: null }
    ]
  },
  "fundo": {
    title: "Fundo",
    category: "Participation",
    description: "Participation in Fundo project, contributing to development and testing activities.",
    images: ["./assets/images/project-3.jpg"],
    keywords: ["Participation", "Project"],
    links: [
      { name: "Details", url: "#", icon: null }
    ]
  },
  "dsm.": {
    title: "DSM.",
    category: "Participation",
    description: "Participation in DSM. project, involved in various development phases.",
    images: ["./assets/images/project-5.png"],
    keywords: ["Participation", "Development"],
    links: [
      { name: "Details", url: "#", icon: null }
    ]
  },
  "metaspark": {
    title: "MetaSpark",
    category: "Participation",
    description: "Participation in MetaSpark project, contributing to innovative solutions.",
    images: ["./assets/images/project-6.png"],
    keywords: ["Participation", "Innovation"],
    links: [
      { name: "Details", url: "#", icon: null }
    ]
  },
  "brawlhalla": {
    title: "Brawlhalla",
    category: "Others",
    description: "Brawlhalla project involvement, focusing on game testing and quality assurance.",
    images: ["./assets/images/project-4.png"],
    keywords: ["Gaming", "Testing"],
    links: [
      { name: "Details", url: "#", icon: null }
    ]
  },
  "task manager": {
    title: "Task Manager",
    category: "Others",
    description: "Task Manager application development and testing, focusing on productivity tools.",
    images: ["./assets/images/project-8.jpg"],
    keywords: ["Productivity", "Application"],
    links: [
      { name: "Details", url: "#", icon: null }
    ]
  },
  
  // Regular Projects Section Projects
  "finance": {
    title: "Finance",
    category: "Web development",
    description: "Financial web application project focusing on secure transactions and real-time data processing.",
    images: ["./assets/images/project-1.jpg"],
    keywords: ["Web Development", "Finance", "Security"],
    links: [
      { name: "Live Demo", url: "#", icon: null },
      { name: "GitHub", url: "#", icon: null }
    ]
  },
  "orizon": {
    title: "Orizon",
    category: "Web development",
    description: "Orizon project - a modern web application with advanced features and responsive design.",
    images: ["./assets/images/project-2.png"],
    keywords: ["Web Development", "Responsive", "Modern"],
    links: [
      { name: "Live Demo", url: "#", icon: null },
      { name: "Details", url: "#", icon: null }
    ]
  },
  "brawlhalla": {
    title: "Brawlhalla",
    category: "Applications",
    description: "Brawlhalla game testing and quality assurance project.",
    images: ["./assets/images/project-4.png"],
    keywords: ["Gaming", "Testing", "QA"],
    links: [
      { name: "Details", url: "#", icon: null }
    ]
  },
  "dsm.": {
    title: "DSM.",
    category: "Web design",
    description: "DSM. web design project with focus on user experience and visual aesthetics.",
    images: ["./assets/images/project-5.png"],
    keywords: ["Web Design", "UI/UX"],
    links: [
      { name: "Live Demo", url: "#", icon: null }
    ]
  },
  "metaspark": {
    title: "MetaSpark",
    category: "Web design",
    description: "MetaSpark creative web design project with innovative features.",
    images: ["./assets/images/project-6.png"],
    keywords: ["Web Design", "Creative"],
    links: [
      { name: "Details", url: "#", icon: null }
    ]
  },
  "summary": {
    title: "Summary",
    category: "Web development",
    description: "Summary web application for data analysis and reporting.",
    images: ["./assets/images/project-7.png"],
    keywords: ["Web Development", "Analytics", "Reporting"],
    links: [
      { name: "Live Demo", url: "#", icon: null },
      { name: "GitHub", url: "#", icon: null }
    ]
  },
  "task manager": {
    title: "Task Manager",
    category: "Applications",
    description: "Task Manager application for productivity and project management.",
    images: ["./assets/images/project-8.jpg"],
    keywords: ["Productivity", "Application", "Management"],
    links: [
      { name: "Live Demo", url: "#", icon: null },
      { name: "Details", url: "#", icon: null }
    ]
  },
  "arrival": {
    title: "Arrival",
    category: "Web development",
    description: "Arrival project - modern web application with real-time features.",
    images: ["./assets/images/project-9.png"],
    keywords: ["Web Development", "Real-time"],
    links: [
      { name: "Live Demo", url: "#", icon: null },
      { name: "Details", url: "#", icon: null }
    ]
  }
};

// project modal toggle function
let isModalTransitioning = false;

const projectModalFunc = function () {
  // Prevent rapid toggling
  if (isModalTransitioning) return;
  
  isModalTransitioning = true;
  
  projectModalContainer.classList.toggle("active");
  document.body.style.overflow = projectModalContainer.classList.contains("active") ? "hidden" : "auto";
  
  // Clear auto-scroll when modal closes
  if (!projectModalContainer.classList.contains("active")) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
  
  // Reset transition lock after animation completes
  setTimeout(() => {
    isModalTransitioning = false;
  }, 300);
};

// show project modal function
const showProjectModal = function (projectTitle, sectionContext) {
  // Normalize title for lookup
  let normalizedTitle = projectTitle.toLowerCase().trim();
  
  // Handle duplicate project names by section context
  // For example, "Fundo" exists in both regular projects and participation sections
  // We'll use the section context to help disambiguate if needed
  if (sectionContext === "certification" && normalizedTitle === "fundo") {
    normalizedTitle = "fundo"; // This will use the certification version
  } else if (sectionContext === "projects" && normalizedTitle === "fundo") {
    normalizedTitle = "fundo"; // This will use the projects version (same data)
  }
  
  // Handle other duplicates
  if (sectionContext === "certification" && normalizedTitle === "dsm.") {
    normalizedTitle = "dsm."; // Certification version
  } else if (sectionContext === "projects" && normalizedTitle === "dsm.") {
    normalizedTitle = "dsm."; // Projects version (same data)
  }
  
  if (sectionContext === "certification" && normalizedTitle === "metaspark") {
    normalizedTitle = "metaspark"; // Certification version
  } else if (sectionContext === "projects" && normalizedTitle === "metaspark") {
    normalizedTitle = "metaspark"; // Projects version (same data)
  }
  
  if (sectionContext === "certification" && normalizedTitle === "brawlhalla") {
    normalizedTitle = "brawlhalla"; // Certification version
  } else if (sectionContext === "projects" && normalizedTitle === "brawlhalla") {
    normalizedTitle = "brawlhalla"; // Projects version (same data)
  }
  
  if (sectionContext === "certification" && normalizedTitle === "task manager") {
    normalizedTitle = "task manager"; // Certification version
  } else if (sectionContext === "projects" && normalizedTitle === "task manager") {
    normalizedTitle = "task manager"; // Projects version (same data)
  }
  
  // Get project data
  const projectData = projectDataMap[normalizedTitle];
  
  if (!projectData) {
    console.error("Project data not found for:", projectTitle, "in section:", sectionContext);
    // Show a generic modal with the title
    showGenericModal(projectTitle);
    return;
  }

  currentProjectData = projectData;
  currentImageIndex = 0;

  // Populate modal content
  projectTitleElement.textContent = projectData.title;
  projectCategory.textContent = projectData.category;
  projectDescription.textContent = projectData.description;

  // Populate carousel
  projectCarousel.innerHTML = "";
  
  if (projectData.images && projectData.images.length > 0) {
    projectData.images.forEach((imgSrc, index) => {
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = projectData.title;
      img.loading = "lazy";
      
      // Handle image load errors
      img.onerror = function() {
        this.style.display = "none";
        // If this was the active image and there are other images, show the next one
        if (this.classList.contains("active") && projectData.images.length > 1) {
          this.classList.remove("active");
          const nextImg = this.nextElementSibling;
          if (nextImg) nextImg.classList.add("active");
        }
      };
      
      // Ensure proper image display
      img.onload = function() {
        // Image loaded successfully, ensure it's displayed properly
        this.style.display = "block";
        // Remove any loading indicators
        this.classList.remove("loading");
      };
      
      if (index === 0) img.classList.add("active");
      projectCarousel.appendChild(img);
    });
  }

  // Update counter and navigation
  updateCarouselCounter();
  
  // Add class for multiple images
  if (projectData.images && projectData.images.length > 1) {
    projectCarousel.parentElement.classList.add("has-multiple-images");
  } else {
    projectCarousel.parentElement.classList.remove("has-multiple-images");
  }
  
  // Check if all images are hidden (failed to load)
  setTimeout(() => {
    const visibleImages = projectCarousel.querySelectorAll("img:not([style*='display: none'])");
    if (visibleImages.length === 0 && projectData.images && projectData.images.length > 0) {
      // All images failed to load, show message
      projectCarousel.innerHTML = "";
      projectCarousel.style.display = "flex";
      projectCarousel.style.alignItems = "center";
      projectCarousel.style.justifyContent = "center";
      projectCarousel.style.color = "var(--light-gray-70)";
      projectCarousel.style.fontSize = "14px";
      projectCarousel.textContent = "Images unavailable";
      
      // Hide navigation
      carouselCounter.style.display = "none";
      carouselPrev.style.display = "none";
      carouselNext.style.display = "none";
      projectCarousel.parentElement.classList.remove("has-multiple-images");
    }
  }, 100);

  // Populate technologies
  if (projectData.keywords && projectData.keywords.length > 0) {
    projectTechnologies.innerHTML = `
      <h4>Technologies</h4>
      <div class="technologies-list">
        ${projectData.keywords.map(tech => `<span class="tech-tag">${tech}</span>`).join("")}
      </div>
    `;
  } else {
    projectTechnologies.innerHTML = "";
  }

  // Populate links
  if (projectData.links && projectData.links.length > 0) {
    projectLinks.innerHTML = `
      <h4>Links</h4>
      <div class="links-list">
        ${projectData.links.map(link => `
          <a href="${link.url}" class="project-link-btn" target="_blank" rel="noopener noreferrer">
            ${link.icon ? `<img src="${link.icon}" alt="${link.name}" style="width: 16px; height: 16px;">` : ""}
            ${link.name}
          </a>
        `).join("")}
      </div>
    `;
  } else {
    projectLinks.innerHTML = "";
  }

  // Update title
  projectTitleElement.textContent = projectData.title;

  // Show modal
  projectModalFunc();

  // Start auto-scroll
  startAutoScroll();
};

// show generic modal for projects without detailed data
const showGenericModal = function (projectTitle) {
  currentProjectData = {
    title: projectTitle,
    category: "Project",
    description: "Detailed information for this project is coming soon.",
    images: ["./assets/images/project-1.jpg"], // Default placeholder
    keywords: [],
    links: []
  };
  currentImageIndex = 0;

  // Populate modal content
  projectTitleElement.textContent = projectTitle;
  projectCategory.textContent = "Project";
  projectDescription.textContent = "Detailed information for this project is coming soon.";

  // Populate carousel with placeholder
  projectCarousel.innerHTML = "";
  const img = document.createElement("img");
  img.src = "./assets/images/project-1.jpg";
  img.alt = projectTitle;
  img.loading = "lazy";
  img.classList.add("active");
  
  // Handle placeholder image error
  img.onerror = function() {
    this.style.display = "none";
    // Show a message if no images available
    projectCarousel.innerHTML = "";
    projectCarousel.style.display = "flex";
    projectCarousel.style.alignItems = "center";
    projectCarousel.style.justifyContent = "center";
    projectCarousel.style.color = "var(--light-gray-70)";
    projectCarousel.style.fontSize = "14px";
    projectCarousel.textContent = "No image available";
  };
  
  // Ensure proper display
  img.onload = function() {
    this.style.display = "block";
  };
  
  projectCarousel.appendChild(img);

  // Hide counter and navigation for single image
  carouselCounter.style.display = "none";
  carouselPrev.style.display = "none";
  carouselNext.style.display = "none";
  
  // Remove multiple images class
  if (projectCarousel.parentElement) {
    projectCarousel.parentElement.classList.remove("has-multiple-images");
  }

  // Clear technologies and links
  projectTechnologies.innerHTML = "";
  projectLinks.innerHTML = "";

  // Show modal
  projectModalFunc();
};

// carousel navigation functions
const showNextImage = function () {
  if (!currentProjectData || !currentProjectData.images || currentProjectData.images.length <= 1) return;

  const images = projectCarousel.querySelectorAll("img");
  if (images.length === 0) return;

  // Remove active class from current image
  images[currentImageIndex].classList.remove("active");

  // Update index
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // Add active class to next image
  images[currentImageIndex].classList.add("active");

  // Update counter
  updateCarouselCounter();

  // Reset auto-scroll timer
  resetAutoScroll();
};

const showPrevImage = function () {
  if (!currentProjectData || !currentProjectData.images || currentProjectData.images.length <= 1) return;

  const images = projectCarousel.querySelectorAll("img");
  if (images.length === 0) return;

  // Remove active class from current image
  images[currentImageIndex].classList.remove("active");

  // Update index
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;

  // Add active class to previous image
  images[currentImageIndex].classList.add("active");

  // Update counter
  updateCarouselCounter();

  // Reset auto-scroll timer
  resetAutoScroll();
};

const updateCarouselCounter = function () {
  if (!currentProjectData || !currentProjectData.images || currentProjectData.images.length <= 1) {
    carouselCounter.style.display = "none";
    carouselPrev.style.display = "none";
    carouselNext.style.display = "none";
    return;
  }

  const totalImages = currentProjectData.images.length;
  carouselCounter.textContent = `${currentImageIndex + 1}/${totalImages}`;
  carouselCounter.style.display = "block";
  
  // Show buttons but they'll be hidden by CSS until hover/focus
  carouselPrev.style.display = "flex";
  carouselNext.style.display = "flex";
  
  // Force show buttons on touch devices
  if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
    carouselPrev.style.opacity = "1";
    carouselNext.style.opacity = "1";
    carouselPrev.style.visibility = "visible";
    carouselNext.style.visibility = "visible";
  }
};

// auto-scroll functions
const startAutoScroll = function () {
  if (!currentProjectData || !currentProjectData.images || currentProjectData.images.length <= 1) return;

  // Clear any existing interval
  clearInterval(autoScrollInterval);

  // Start new interval (4 seconds)
  autoScrollInterval = setInterval(() => {
    if (projectModalContainer.classList.contains("active")) {
      showNextImage();
    }
  }, 4000);
};

const resetAutoScroll = function () {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
    startAutoScroll();
  }
};

// Helper function to open project modal
function openProjectModal(element) {
  // Get the project title from the element
  const titleElement = element.querySelector(".project-title");
  if (titleElement) {
    const projectTitle = titleElement.textContent;
    
    // Determine section context based on parent article
    const parentArticle = element.closest("article");
    let sectionContext = "projects"; // default
    
    if (parentArticle) {
      const pageAttr = parentArticle.getAttribute("data-page");
      if (pageAttr === "certification") {
        sectionContext = "certification";
      }
    }
    
    showProjectModal(projectTitle, sectionContext);
  }
}

// add click event to all project items
for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("click", function (e) {
    e.preventDefault();
    
    // Get the project title from the element
    const titleElement = this.querySelector(".project-title");
    if (!titleElement) return;
    
    const projectTitle = titleElement.textContent;
    
    // Prevent opening multiple modals
    if (projectModalContainer.classList.contains("active")) {
      // Check if we're trying to open the same project
      if (currentProjectData && currentProjectData.title === projectTitle) {
        // Same project, just close the modal
        projectModalFunc();
        return;
      }
      
      // Different project, close current and open new one
      projectModalFunc();
      setTimeout(() => {
        openProjectModal(this);
      }, 350);
      return;
    }
    
    // Open modal normally
    openProjectModal(this);
  });
}

// add click event to modal close button
projectModalCloseBtn.addEventListener("click", projectModalFunc);
projectOverlay.addEventListener("click", projectModalFunc);

// Click outside modal content to close
projectModalContainer.addEventListener("click", function (e) {
  if (e.target === projectModalContainer) {
    projectModalFunc();
  }
});

// add click events to carousel buttons
if (carouselPrev) {
  carouselPrev.addEventListener("click", showPrevImage);
}
if (carouselNext) {
  carouselNext.addEventListener("click", showNextImage);
}

// keyboard navigation for modal
document.addEventListener("keydown", function (e) {
  if (!projectModalContainer.classList.contains("active")) return;

  if (e.key === "Escape") {
    projectModalFunc();
  } else if (e.key === "ArrowRight") {
    showNextImage();
  } else if (e.key === "ArrowLeft") {
    showPrevImage();
  }
});

// Prevent body scroll when modal is open
projectModalContainer.addEventListener("wheel", function (e) {
  if (projectModalContainer.classList.contains("active")) {
    // Allow scrolling within the modal
    e.stopPropagation();
  }
});

// Prevent body scroll when modal is open (touch)
projectModalContainer.addEventListener("touchmove", function (e) {
  if (projectModalContainer.classList.contains("active")) {
    // Allow scrolling within the modal
    e.stopPropagation();
  }
});

// Close modal when page visibility changes (user switches tabs)
document.addEventListener("visibilitychange", function () {
  if (document.hidden && projectModalContainer.classList.contains("active")) {
    projectModalFunc();
  }
});

// Close modal when user navigates back/forward
window.addEventListener("popstate", function () {
  if (projectModalContainer.classList.contains("active")) {
    projectModalFunc();
  }
});

// Close modal when user clicks on navigation links
const navLinks = document.querySelectorAll("[data-nav-link]");
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    if (projectModalContainer.classList.contains("active")) {
      projectModalFunc();
    }
  });
});

// Add touch support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

projectModalContainer.addEventListener("touchstart", function (e) {
  touchStartX = e.changedTouches[0].screenX;
});

projectModalContainer.addEventListener("touchend", function (e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (!projectModalContainer.classList.contains("active")) return;
  
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - next image
      showNextImage();
    } else {
      // Swipe right - previous image
      showPrevImage();
    }
  }
}

// Handle window resize while modal is open
let resizeTimeout;
window.addEventListener("resize", function () {
  if (!projectModalContainer.classList.contains("active")) return;
  
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    // Recalculate carousel position if needed
    const images = projectCarousel.querySelectorAll("img");
    if (images.length > 0 && currentImageIndex < images.length) {
      // Ensure current image is still visible
      images.forEach((img, index) => {
        if (index === currentImageIndex) {
          img.classList.add("active");
        } else {
          img.classList.remove("active");
        }
      });
    }
  }, 250);
});