document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector('.header_nav-burger');
  const nav = document.querySelector('.header_nav-ul');

  if (!burger || !nav) return;


  burger.addEventListener('click', function (e) {
    e.stopPropagation();
    burger.classList.toggle('active_burger');
    nav.classList.toggle('open');
   
    
    if (nav.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

 
  document.addEventListener('click', function (e) {
    if (
      nav.classList.contains('open') &&
      !nav.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      nav.classList.remove('open');
      burger.classList.remove('active_burger');
      document.body.style.overflow = '';
    }
  });


  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      burger.classList.remove('active_burger');
      document.body.style.overflow = '';
    }
  });


  window.addEventListener('resize', function () {
    if (window.innerWidth > 1105) {
      nav.classList.remove('open');
      burger.classList.remove('active_burger');
      document.body.style.overflow = '';
    }
  });


  const menuLinks = nav.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
     
      if (!link.closest(".header_sub_nav-ul")) {
        console.log("Menu link clicked");
        nav.classList.remove('open');
        burger.classList.remove('active_burger');
        document.body.style.overflow = '';
      }
    });
  });


  const subMenuParents = nav.querySelectorAll(".nav_list-active");
  subMenuParents.forEach(parent => {
    const link = parent.querySelector("a");
    const subMenu = parent.querySelector(".header_sub_nav-ul");
    
    if (link && subMenu) {
      link.addEventListener("click", (e) => {
        if (window.innerWidth <= 1105) {
          e.preventDefault();
          console.log("Submenu clicked");
          const isSubMenuVisible = subMenu.style.display === "block";
          
          
          subMenuParents.forEach(otherParent => {
            if (otherParent !== parent) {
              const otherSubMenu = otherParent.querySelector(".header_sub_nav-ul");
              if (otherSubMenu) {
                otherSubMenu.style.display = "none";
              }
            }
          });

          subMenu.style.display = isSubMenuVisible ? "none" : "block";
          console.log("Submenu status:", isSubMenuVisible ? "closed" : "opened");
        }
      });
    }
  });
});
