const navSearch = document.querySelector(".navSearch");
const faq = document.querySelectorAll(".faqLi");
const faqMessage = document.querySelectorAll(".faqs-message");
const headerBtn = document.getElementById("headerBtn");
const headerMbl = document.querySelector(".headerBtn");

if (navSearch != null) {
  navSearch.addEventListener("click", () => {
    document.querySelector(".navSearchWrapper > input").style.opacity = 1;
  });
}

if (faq) {
  for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", () => {
      faqMessage.forEach((el, index) => {
        if (i == index) {
          el.classList.toggle("hidden");
        }
      });
    });
  }
}

if (headerBtn != null) {
  headerBtn.addEventListener("click", function () {
    document.getElementById("dropdown").classList.toggle("hidden");
  });
}

if (headerMbl != null) {
  headerMbl.addEventListener("click", function () {
    document.querySelector(".mbl-dropdown").classList.toggle("hidden");
  });
}

let mySwiper = document.querySelector(".mySwiper");

if (mySwiper) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
    },
  });
}

let dropdownLinks = document.querySelectorAll("#dropdown li a");
let searchInput = document.querySelector("#search");
let mblsearch = document.querySelector("#mblsearch");

if (dropdownLinks && searchInput) {
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      searchInput.value = link.getAttribute("href");
      document.getElementById("dropdown").classList.toggle("hidden");
    });
  });
}

let mobileMenu = document.querySelector(".mobile-menu");
let navbar = document.querySelector(".mobile-navbar");
let closeNavbar = document.querySelector(".close-navbar");

if (mobileMenu && navbar && closeNavbar) {
  mobileMenu.addEventListener("click", () => {
    navbar.classList.remove("-left-60");
    navbar.classList.add("left-0");
  });

  closeNavbar.addEventListener("click", () => {
    navbar.classList.add("-left-60");
    navbar.classList.remove("left-0");
  });
}

let mobiledropdownLinks = document.querySelectorAll(".mbl-dropdown li a");
let mobiledropdown = document.querySelector(".mbl-dropdown");

if (mobiledropdownLinks && mobiledropdown) {
  mobiledropdownLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      mblsearch.value = link.getAttribute("href");
      mobiledropdown.classList.toggle("hidden");
    });
  });
}
