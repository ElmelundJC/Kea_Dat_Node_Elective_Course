// how do i access the element that i want to modify?
const footerAbout = document.getElementById("footer-about");

footerAbout.innerText = "© Copyright " + new Date().getFullYear();

console.log(new Date().getFullYear());