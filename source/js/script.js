/*кнопка открытия меню*/
var mainNav = document.querySelector(".main-nav");
var mainNavButton = document.querySelector(".main-nav__button");

mainNav.classList.remove("main-nav--nojs");
mainNav.classList.add("main-nav--closed");

mainNavButton.addEventListener("click", function() {
  mainNav.classList.toggle("main-nav--closed");
});

/*слайдер*/
var slider = document.querySelector(".slider");
var buttonBefore = document.querySelector(".slider__toggle--before");
var buttonAfter = document.querySelector(".slider__toggle--after");

buttonBefore.addEventListener("click", function() {
  slider.classList.remove("slider--after");
  slider.classList.add("slider--before");
});

buttonAfter.addEventListener("click", function() {
  slider.classList.remove("slider--before");
  slider.classList.add("slider--after");
});
