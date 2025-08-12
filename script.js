// script.js for IYE Engineering (modern interactions)

// Preloader

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 3000); // 3000 = 3 seconds
  }
});


// Back to Top
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hamburger Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
function showTestimonial(index) {
  testimonials.forEach((el, i) => {
    el.style.display = i === index ? 'block' : 'none';
  });
}
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 6000);
showTestimonial(currentTestimonial);

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item h3');
faqItems.forEach(item => {
  item.addEventListener('click', () => {
    const next = item.nextElementSibling;
    next.style.display = next.style.display === 'block' ? 'none' : 'block';
  });
});

document.querySelectorAll('.footer-column h4').forEach(header => {
  header.addEventListener('click', () => {
    header.parentElement.classList.toggle('active');
  });
});


document.querySelectorAll(".about-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;

    // Close all other sections
    document.querySelectorAll(".about-toggle").forEach(t => {
      if (t !== toggle) {
        t.classList.remove("active");
        t.nextElementSibling.style.maxHeight = null;
      }
    });

    // Toggle the clicked one
    toggle.classList.toggle("active");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
