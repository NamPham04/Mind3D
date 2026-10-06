const menu = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menu) {
  menu.addEventListener("click", () => {
    const open = navLinks.style.display === "flex";
    navLinks.style.display = open ? "" : "flex";
    if (!open) {
      navLinks.style.position = "absolute";
      navLinks.style.top = "68px";
      navLinks.style.left = "0";
      navLinks.style.right = "0";
      navLinks.style.padding = "20px";
      navLinks.style.background = "rgba(247,245,236,.98)";
      navLinks.style.flexDirection = "column";
      navLinks.style.borderBottom = "1px solid rgba(21,37,54,.08)";
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    if (navLinks && window.innerWidth <= 850) navLinks.style.display = "";
  });
});
