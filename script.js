let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  
};
// document.addEventListener("click", (event) => {
//   const isCertainSectionClicked = event.target.closest("#menu-icon");
  
//   if (!isCertainSectionClicked) {
//     menuIcon.classList.add("bx-x");
//     navbar.classList.add("active");
//   }
// });

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href *=" + id + "]")
          .classList.add("active");
      });
    }
  });
};


// new line
// let header = document.querySelector("header");
// header.classList.toggle("sticky".window.scrollY > 100);
// menuIcon.classList.remove("bx-x");
// navbar.classList.remove("active");
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin:'top', delay:100});
ScrollReveal().reveal('.social-media, .about-content ,.about-image', { delay: 200 });

const typed= new Typed('.typed-text',{
  strings:['FRONT END | REACT DEVELOPER','designer'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});

// const myName={
//   name:'umanga',
//   class:'bachelors'
// }

// console.log(myName.name)
