/*кнопка открытия меню*/
var mainNav = document.querySelector(".main-nav");
var mainNavButton = document.querySelector(".main-nav__button");

mainNav.classList.remove("main-nav--nojs");
mainNav.classList.add("main-nav--closed");

mainNavButton.addEventListener("click", function () {
  mainNav.classList.toggle("main-nav--closed");
});

/*слайдер*/
var slider = document.querySelector(".slider");
var buttonBefore = document.querySelector(".slider__toggle--before");
var buttonAfter = document.querySelector(".slider__toggle--after");

buttonBefore.addEventListener("click", function () {
  slider.classList.remove("slider--after");
  slider.classList.add("slider--before");
});

buttonAfter.addEventListener("click", function () {
  slider.classList.remove("slider--before");
  slider.classList.add("slider--after");
});

/*валидация формы*/

var form = document.querySelector(".form");
var name = popup.querySelector("[name=name]");
var weight = popup.querySelector("[name=weight]");
var email = popup.querySelector("[name=email]");
var tel = popup.querySelector("[name=tel]");

form.addEventListener("submit", function (evt) {
  if (!name.value || !weight.value || !email.value || !tel.value) {
    evt.preventDefault();
    form.classList.add("form--invalid");
  }
});
