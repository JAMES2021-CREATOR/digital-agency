
const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
  
// const links = document.querySelectorAll(".nav-link");
// links.forEach(link => {
//   link.addEventListener("click", function(e) {
//     e.preventDefault();

//     const targetId = this.getAttribute("href");
//     const targetSection = document.querySelector("#service");
    
// if (targetSection) {
//       targetSection.scrollIntoView({
//         behavior: "smooth"
    
//     });
//   });
// });
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href"); // #home, #service, etc
    const targetSection = document.querySelector(#service);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});