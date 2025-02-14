/**
* Template Name: Medicio
* Template URL: https://bootstrapmade.com/medicio-free-bootstrap-theme/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */

  window.onscroll = function () {
    const header = document.getElementById("header");
    const scrollPosition = 200; // Adjust this value as needed
    if (window.scrollY > scrollPosition) {
      header.classList.add("fixed-header", "visible");
    } else {
      header.classList.remove("fixed-header", "visible");
    }
  };

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>" :
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 200,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Clients Slider
   */
  document.addEventListener("DOMContentLoaded", function () {
    const galleryData = [
        { path: "assets/img/gallery/new 31.8.24/new31img1.jpg"},
        { path: "assets/img/gallery/new 31.8.24/new31img2.jpg"},
        { path: "assets/img/gallery/new 31.8.24/new31img3.jpg"},
        { path: "assets/img/gallery/new 31.8.24/new31img4.jpg"},
        { path: "assets/img/gallery/new 31.8.24/new31img5.jpg"},
        { path: "assets/img/gallery/new 31.8.24/new31img6.jpg"},
        { path: "assets/img/gallery/new 31.8.24/new31img7.jpg"},
        { path: "assets/img/gallery/new 31.8.24/new31img8.jpg"},
        { path: "assets/img/gallery/Narendra Modi Photo.webp" },
        { path: "assets/img/gallery/Harsh Sanghvi Visit 1.webp" },
        { path: "assets/img/gallery/Harsh Sanghvi Visit.webp" },
        { path: "assets/img/gallery/Arvindbhai Rana.webp" },
        { path: "assets/img/gallery/Darshanaben Jardosh.webp" },
        {path : "assets/img/gallery/CC_S1677.jpg"},
        { path: "assets/img/photos/1.webp" },
        { path: "assets/img/photos/2.webp" },
        { path: "assets/img/photos/3.webp" },
        { path: "assets/img/photos/7.webp" },
        { path: "assets/img/photos/9.webp" },
        { path: "assets/img/photos/10.webp" },
        { path: "assets/img/photos/11.webp" },
        { path: "assets/img/photos/13.webp" },
        { path: "assets/img/photos/14.webp" },
        { path: "assets/img/photos/15.webp" },
        { path: "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.20.56_332bef6c.webp"},
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.20.56_75380886.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.20.57_3de235cf.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.20.57_75354724.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.20.58_316908dd.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.20.59_e2b9ee79.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.21.00_07201328.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.21.05_8eeec80c.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.21.07_b9d7f7d2.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.21.34_cdcaf2ea.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.21.35_e4a0958e.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.21.35_f74350a2.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.21.37_afa7478f.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.21.39_2c222f69.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.21.40_b5869fe1.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.21.41_7f7ce9bb.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.21.41_88f65f79.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.21.42_593fda84.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp Image 2024-08-31 at 17.21.42_dbe30e68.webp" },
        { "path": "assets/img/gallery/new 31.8.24/WhatsApp-Image-2024-08-31-at-17.21.43_08b46399.webp" }

      ];

    const galleryContainer = document.querySelector(".swiper-wrapper");

    galleryData.forEach((item) => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");

        const link = document.createElement("a");
        link.classList.add("gallery-lightbox");
        link.href = item.path;

        const img = document.createElement("img");
        img.src = item.path;
        img.classList.add("img-fluid");
        img.alt = "";

        link.appendChild(img);
        slide.appendChild(link);
        galleryContainer.appendChild(slide);
    });

    var swiper = new Swiper('.gallery-slider', {
        speed: 400,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 20
            }
        }
    });

    // Initiate gallery lightbox
    const galleryLightbox = GLightbox({
        selector: '.gallery-lightbox'
    });

    // Animation on scroll
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    });

    // Initiate Pure Counter
    new PureCounter();
});


  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()


// event posts section

document.addEventListener('DOMContentLoaded', () => {
  const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
  imageModal.show();
});


// video modal after gallery
document.addEventListener('DOMContentLoaded', function () {
  const videoModal = document.getElementById('videoModal');
  const modalVideoContainer = document.getElementById('modalVideoContainer');

  videoModal.addEventListener('show.bs.modal', function (event) {
      const clickedElement = event.relatedTarget; // The element that triggered the modal
      const videoType = clickedElement.getAttribute('data-video-type');
      const videoSrc = clickedElement.getAttribute('data-video-src');

      // Clear previous content
      modalVideoContainer.innerHTML = '';

      // Insert new content based on video type
      if (videoType === 'youtube') {
          modalVideoContainer.innerHTML = `
              <iframe src="${videoSrc}?autoplay=1" 
                      allowfullscreen
                      class="embed-responsive-item w-100 h-100"></iframe>`;
      } else if (videoType === 'local') {
          modalVideoContainer.innerHTML = `
              <video id="modalVideo" class="w-100 h-100" autoplay loop controls>
                  <source src="${videoSrc}" type="video/mp4">
                  Your browser does not support the video tag.
              </video>`;

          // Wait for the DOM to update before playing
          setTimeout(() => {
              const modalVideo = document.getElementById('modalVideo');
              if (modalVideo) {
                  modalVideo.play().catch(error => console.log("Autoplay blocked:", error));
              }
          }, 100);
      }
  });

  // Reset modal content when closed
  videoModal.addEventListener('hidden.bs.modal', function () {
      modalVideoContainer.innerHTML = '';
  });
});
