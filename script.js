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
