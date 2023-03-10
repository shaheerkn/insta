const faq = document.querySelectorAll(".faqLi");
const faqMessage = document.querySelectorAll(".faqs-message");
const headerBtn = document.getElementById("headerBtn");
const headerMbl = document.querySelector(".headerBtn");
const navSearch = document.querySelectorAll(".navSearch");
const navInput = document.querySelectorAll(".navSearchWrapper > input");

if (navSearch != null) {
  navSearch.forEach((navsearch, i) => {
    navsearch.addEventListener("click", () => {
      navInput[i].style.opacity = 1;
      navInput[i].focus();
    });
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

let sectionBtn = document.querySelectorAll(".section-btn");
let dynamicSection = document.querySelectorAll(".dynamic-section");
let dynamicimg = document.querySelectorAll(".dynamic-img");

if (sectionBtn && dynamicSection && dynamicimg) {
  function removeClass() {
    for (let i = 0; i < sectionBtn.length; i++) {
      sectionBtn[i].classList.remove("bg-[#FC4F1E]");
      dynamicSection[i].classList.add("hidden");
      dynamicimg[i].classList.add("hidden");
    }
  }

  sectionBtn.forEach((sectionBtn, i) => {
    sectionBtn.addEventListener("click", () => {
      removeClass();
      sectionBtn.classList.add("bg-[#FC4F1E]");
      dynamicSection[i].classList.toggle("hidden");
      dynamicimg[i].classList.toggle("hidden");
    });
  });
}

let tabs = document.querySelectorAll(".tabs");
let tabsCard = document.querySelectorAll(".tabs-card");

if (tabs && tabsCard) {
  function hideCards() {
    for (let i = 0; i < tabsCard.length; i++) {
      tabsCard[i]?.classList.add("hidden");
      tabs[i]?.classList.remove("bg-[#F6F6F6]");
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      hideCards();
      tab.classList.add("bg-[#F6F6F6]");
      for (let i = 0; i < tabsCard.length; i++) {
        if (tabsCard[i].classList.contains(tab.getAttribute("for"))) {
          tabsCard[i].classList.remove("hidden");
        }
      }
    });
  });
}

let mobileTool = document.querySelector(".mobile-tool");
let dropdownTool = document.querySelector(".tool-dropdown");

if (mobileMenu && dropdownTool) {
  mobileTool.addEventListener("click", () => {
    dropdownTool.classList.toggle("hidden");
    dropdownTool.classList.toggle("flex");
  });
}
