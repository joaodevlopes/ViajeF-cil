// Hero Slider Variables
let currentSlide = 0;
let slideInterval;
const slideDuration = 5000; // 5 seconds

// Testimonial Slider Variables
let currentTestimonial = 0;
let testimonialInterval;
const testimonialDuration = 5000; // 5 seconds

// Initialize Sliders
document.addEventListener('DOMContentLoaded', function() {
  initHeroSlider();
  initTestimonialSlider();
});

// Hero Slider Functions
function initHeroSlider() {
  const slideContainer = document.querySelector('.slide-container');
  const dotsContainer = document.querySelector('.slider-dots');
  
  if (!slideContainer || !dotsContainer) return;
  
  // Create slides
  heroSlides.forEach((slide, index) => {
    const slideElement = document.createElement('div');
    slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
    slideElement.style.backgroundImage = `url(${slide.image})`;
    
    slideElement.innerHTML = `
      <div class="container">
        <div class="slide-content">
          <h1>${slide.title}</h1>
          <p>${slide.subtitle}</p>
          <a href="${slide.link}" class="btn btn-primary">${slide.cta}</a>
        </div>
      </div>
    `;
    
    slideContainer.appendChild(slideElement);
    
    // Create dot
    const dot = document.createElement('span');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.setAttribute('data-index', index);
    dotsContainer.appendChild(dot);
    
    // Add click event to dot
    dot.addEventListener('click', () => {
      goToSlide(index);
      resetSlideInterval();
    });
  });
  
  // Set up previous and next buttons
  const prevBtn = document.querySelector('.hero-slider .prev');
  const nextBtn = document.querySelector('.hero-slider .next');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetSlideInterval();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetSlideInterval();
    });
  }
  
  // Start automatic slider
  startSlideInterval();
  
  // Pause slider on hover
  const heroSlider = document.querySelector('.hero-slider');
  if (heroSlider) {
    heroSlider.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    heroSlider.addEventListener('mouseleave', () => {
      startSlideInterval();
    });
  }
}

function startSlideInterval() {
  slideInterval = setInterval(() => {
    nextSlide();
  }, slideDuration);
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  startSlideInterval();
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  
  if (!slides.length || !dots.length) return;
  
  // Hide current slide
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  
  // Show new slide
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;
  
  const nextIndex = (currentSlide + 1) % slides.length;
  goToSlide(nextIndex);
}

function prevSlide() {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;
  
  const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  goToSlide(prevIndex);
}

// Testimonial Slider Functions
function initTestimonialSlider() {
  const testimonialContainer = document.querySelector('.testimonial-container');
  const testimonialDotsContainer = document.querySelector('.testimonial-dots');
  
  if (!testimonialContainer || !testimonialDotsContainer) return;
  
  // Create testimonials
  testimonials.forEach((testimonial, index) => {
    const testimonialElement = document.createElement('div');
    testimonialElement.className = `testimonial ${index === 0 ? 'active' : ''}`;
    
    // Create stars
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
      if (i < testimonial.rating) {
        starsHTML += '<i class="fa-solid fa-star"></i>';
      } else {
        starsHTML += '<i class="fa-regular fa-star"></i>';
      }
    }
    
    testimonialElement.innerHTML = `
      <div class="testimonial-photo">
        <img src="${testimonial.photo}" alt="${testimonial.name}">
      </div>
      <div class="testimonial-content">
        <p>${testimonial.comment}</p>
        <div class="testimonial-rating">
          ${starsHTML}
        </div>
        <div class="testimonial-author">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.location}</p>
        </div>
      </div>
    `;
    
    testimonialContainer.appendChild(testimonialElement);
    
    // Create dot
    const dot = document.createElement('span');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.setAttribute('data-index', index);
    testimonialDotsContainer.appendChild(dot);
    
    // Add click event to dot
    dot.addEventListener('click', () => {
      goToTestimonial(index);
      resetTestimonialInterval();
    });
  });
  
  
  // Set up previous and next buttons
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevTestimonial();
      resetTestimonialInterval();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextTestimonial();
      resetTestimonialInterval();
    });
  }
  
  // Start automatic slider
  startTestimonialInterval();
  
  // Pause slider on hover
  const testimonialSlider = document.querySelector('.testimonial-slider');
  if (testimonialSlider) {
    testimonialSlider.addEventListener('mouseenter', () => {
      clearInterval(testimonialInterval);
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
      startTestimonialInterval();
    });
  }
}

function startTestimonialInterval() {
  testimonialInterval = setInterval(() => {
    nextTestimonial();
  }, testimonialDuration); // USANDO 6000ms = 6 segundos
}


function resetTestimonialInterval() {
  clearInterval(testimonialInterval);
  startTestimonialInterval();
}


function goToTestimonial(index) {
  const testimonialElements = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  
  if (!testimonialElements.length || !dots.length) return;
  
  // Hide current testimonial
  testimonialElements[currentTestimonial].classList.remove('active');
  dots[currentTestimonial].classList.remove('active');
  
  // Show new testimonial
  currentTestimonial = index;
  testimonialElements[currentTestimonial].classList.add('active');
  dots[currentTestimonial].classList.add('active');
}

function nextTestimonial() {
  const testimonialElements = document.querySelectorAll('.testimonial');
  if (!testimonialElements.length) return;
  
  const nextIndex = (currentTestimonial + 1) % testimonialElements.length;
  goToTestimonial(nextIndex);
}

function prevTestimonial() {
  const testimonialElements = document.querySelectorAll('.testimonial');
  if (!testimonialElements.length) return;
  
  const prevIndex = (currentTestimonial - 1 + testimonialElements.length) % testimonialElements.length;
  goToTestimonial(prevIndex);
}