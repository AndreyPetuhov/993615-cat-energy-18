/*кнопка открытия меню*/
var mainNav = document.querySelector(".main-nav");
var mainNavWrapper = document.querySelector(".main-nav__wrapper");
var mainNavButton = document.querySelector(".main-nav__button");

mainNavButton.addEventListener("click", function () {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});

/*слайдер*/

var slideBefore = document.querySelector(".slider__image--before");
var slideAfter = document.querySelector(".slider__image--after");
var buttonBefore = document.querySelector(".slider__toggle--before");
var buttonAfter = document.querySelector(".slider__toggle--after");
var scaleLeft = document.querySelector(".slider__scale--left");
var scaleRight = document.querySelector(".slider__scale--right");


buttonBefore.addEventListener("click", function () {
  slideBefore.classList.remove('hidden');
  slideAfter.classList.add('hidden');
  scaleLeft.classList.remove('opacity');
  scaleRight.classList.add('opacity');
});

buttonAfter.addEventListener("click", function () {
  slideAfter.classList.remove('hidden');
  slideBefore.classList.add('hidden');
  scaleRight.classList.remove('opacity');
  scaleLeft.classList.add('opacity');
});
