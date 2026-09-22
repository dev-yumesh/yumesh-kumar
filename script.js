const menu = document.querySelector(".menu");
const nav = document.querySelector("#navLinks");

menu.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
