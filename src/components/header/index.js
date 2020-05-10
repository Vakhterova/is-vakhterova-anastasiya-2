var button = document.querySelector(".header__menu_js");
var newHeader = document.querySelector(".mobile-header_js");
var buttonClose = document.querySelector(".mobile-header__close_js");



//открытие
button.addEventListener("click",function() {
newHeader.classList.remove("mobile-header_none");
});

//Закрытие
buttonClose.addEventListener("click",function() {
newHeader.classList.add("mobile-header_none") ;
});
