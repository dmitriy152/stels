let buttonNav = document.querySelector(".title_conteiner")
let cardBycicle = document.querySelector(".card_bycicle")
buttonNav.addEventListener("click", function(){
  cardBycicle.classList.toggle("none_wrapper")
})

let inputTextValue = document.querySelector(".input_text").value
let createSpecificationElement = document.querySelector(".input_submit")
createSpecificationElement.addEventListener("click", function (evt) {
  evt.preventDefault()
  console.log("click")
  function function1(inputTextValue) {
    let ol = document.querySelector(".ol_specifications");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(inputTextValue));
    ol.appendChild(li);
  }
  function1(inputTextValue)
})