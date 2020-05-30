var button = document.querySelector(".poster-link_js");
var modalForm = document.querySelector(".modal-form_js");
var buttonClose = document.querySelector(".modal-form__x_js");
var input = document.querySelector(".form-input_js");


var buttonHeader = document.querySelector(".header__menu_js");
var headerMobile = document.querySelector(".header__mobile_js");
var menu = document.querySelector(".header__menu_js");
var cancel = document.querySelector(".header__mobile-close_js");



//открытие mob
buttonHeader.addEventListener("click",function() {
  headerMobile.classList.remove("header__mobile_hidden");
  menu.classList.add("header__button-menu_none");
  cancel.classList.remove("header__mobile-close-btn_none");
});


//Закрытие mob
cancel.addEventListener("click",function() {
  menu.classList.remove("header__button-menu_none");
  headerMobile.classList.add("header__mobile_hidden");
  cancel.classList.add("header__mobile-close-btn_none");

});

//Закрытие escape mob
window.addEventListener ("keydown", function (event) {
  if (event.code == "Escape" && !headerMobile.classList.contains ("header__mobile_hidden")) { 
    menu.classList.remove("header__button-menu_none");
    headerMobile.classList.add("header__mobile_hidden");
    cancel.classList.add("header__mobile-close-btn_none");
  button.focus ()
} 
});





//открытие
button.addEventListener("click",function() {
  modalForm.classList.remove("modal-form_none") 
  input.focus ();
});

//Закрытие
buttonClose.addEventListener("click",function() {
  modalForm.classList.add("modal-form_none") 
  button.focus ();
});

//Закрытие escape
window.addEventListener ("keydown", function (event) {
  if (event.code == "Escape" && !modalForm.classList.contains ("modal-form_none")) { 
  modalForm.classList.add("modal-form_none");
  button.focus ()
} 
});


