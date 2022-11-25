window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("fixed");
  } else {
    document.querySelector(".header").classList.remove("fixed");
  }
};
var modal = document.getElementById("modal");
var navbar = document.getElementById("header__navbar-modal");
console.log(modal);
console.log(navbar);
var check = true;

modal.addEventListener("click", function (event) {
  if (check) {
    navbar.classList.add("navbar-block");
    check = false;
  } else {
    navbar.classList.remove("navbar-block");
    check = true;
  }
  console.log(check);
});
