var button = document.querySelector(".poster-link_js");
var modalForm = document.querySelector(".modal-form_js");
var buttonClose = document.querySelector(".modal-form__x_js");
var input = document.querySelector(".form-input_js");


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

