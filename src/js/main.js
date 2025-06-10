document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header_nav-burger");
  const nav = document.querySelector(".header_nav-ul");

  if (burger && nav) {
    burger.addEventListener("click", () => {
 
      nav.classList.toggle("open");

      burger.classList.toggle("active_burger");
    });
  }
});
