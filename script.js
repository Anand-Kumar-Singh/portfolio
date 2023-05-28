var typeDate = new Typed(".role", {
  strings: [
      // "Full Stack Developer",
      "Student",
      "Frontend Web Developer",
      // "UI-UX Desinger",
      // "Backend Developer",
      "Coder",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});



const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
  })
);
const hireBtn = document.getElementById("btn");

function goToContact() {
  window.location.href = "#contactus";
}

function galleryWebsite() {
  window.location.href = "https://anand-kumar-singh.github.io/ImageGallery/";
}

function parallexWebsite() {
  window.location.href = "../parallax_website/index.html";
}

function gameWebsite() {
  window.location.href = "../tictactoe/index.html";
}

function linkedin() {
  window.location.href = "https://www.linkedin.com/mwlite/in/anand-singh13";
}

function insta() {
  window.location.href = "https://www.instagram.com/anand_kumar_singh13/";
}

function github() {
  window.location.href = "https://github.com/Anand-Kumar-Singh";
}

function mail() {
  window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example";
}


