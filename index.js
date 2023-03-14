const slideCont = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slideCont.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slideCont.scrollLeft -= slideWidth;
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

var form = document.getElementById('f');

function sendSuccess() {
  e.preventDefault()
  if (form.checkValidity()) {
    alert("Adding Succesful!");
  }
}

function circleChange() {
  let cont = document.getElementById('container1')
  let shower = document.getElementById('shower')
  let hider = document.getElementById('hider')
  let text1 = document.getElementById('text1')
  // let text1 = document.getElementById('text1')
  let form = document.getElementById('form')
  let box = document.getElementById('success-box')
  let icon = document.getElementById('icon')
  // if (form.checkValidity()) {
    // document.getElementById('user-name').innerHTML = name
    // document.getElementById('user-email').innerHTML = email
    shower.style.opacity = '0'
    hider.style.opacity = '1'
    text1.style.opacity='1'
    cont.style.borderRadius='10px'
   
  // }
}