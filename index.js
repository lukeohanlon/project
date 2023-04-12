// **************** Luke *****************
let modalContent = document.getElementById('modal-txt')
let modalChoice = ''
showModal = (e) => {
  var modalChoice = document.getElementById(e)
  
  modalChoice.style.display = "flex"
  modal.style.opacity = "1"
  modal.style.zIndex = "15"
  modalBox.style.transform = "translate(0)"
}
closeModal = () => {
  [].forEach.call(texts, (text) => {
    text.style.display = "none"
  })
  
  modal.style.opacity = "0"
  modal.style.zIndex = "1"
  modalBox.style.transform = "translate(-100%)"
  // modalContent.style.display = 'none'
}
if (document.getElementById('home') != null) {
  const interval = setInterval(() => {
    sliCount = sliCount + 1
    startSlider()
  }, 4000)

  startSlider = () => {
    if (sliCount <= 3) {
      const sliderWidth = slide.clientWidth
      slideCont.scrollLeft += sliderWidth
    } else {
      const sliderWidth = slide.clientWidth
      slideCont.scrollLeft -= sliderWidth * 5
      sliCount = 0
    }
  }

  const slideCont = document.getElementById('slides-container')
  const slide = document.querySelector('.slide')
  const prevButton = document.getElementById('slide-arrow-prev')
  const nextButton = document.getElementById('slide-arrow-next')

  nextButton.addEventListener('click', () => {
    const slideWidth = slide.clientWidth
    slideCont.scrollLeft += slideWidth
  })

  prevButton.addEventListener('click', () => {
    const slideWidth = slide.clientWidth
    slideCont.scrollLeft -= slideWidth
  })

function popUp() {
  var popup = document.getElementById('myPopup')
  popup.classList.toggle('show')
  setTimeout(() => {
    popup.classList.toggle('show')
  },1500)
}

let texts = document.getElementsByClassName('modal-txt')
let modal = document.getElementById('modal')
let modalBox = document.getElementById('modal-box')
showModal = (e) => {
  var modalChoice = document.getElementById(e)

  modalChoice.style.display = "flex"
  modal.style.opacity = "1"
  modal.style.zIndex = "15"
  modalBox.style.transform = "translate(0)"
}
closeModal = () => {
  [].forEach.call(texts, (text) => {
    text.style.display = "none"
  })
  modal.style.opacity = "0"
  modal.style.zIndex = "1"
  modalBox.style.transform = "translate(-100%)"
}
}

if (document.getElementById('contact')) {
  function popUp() {
    var popup = document.getElementById('myPopup')
    popup.classList.toggle('show')
    setTimeout(() => {
      popup.classList.toggle('show')
    },1500)
  }
  const inputs = document.querySelectorAll('.input')

  function focusFunc() {
    let parent = this.parentNode
    parent.classList.add('focus')
  }

  function blurFunc() {
    let parent = this.parentNode
    if (this.value == '') {
      parent.classList.remove('focus')
    }
  }

  inputs.forEach(input => {
    input.addEventListener('focus', focusFunc)
    input.addEventListener('blur', blurFunc)
  })

  var form = document.getElementById('f')

  function sendSuccess() {
    e.preventDefault()
    if (form.checkValidity()) {
      alert('Adding Succesful!')
    }
  }

}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
  document.getElementById("modal-overlay").style.display = "flex !important"
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}

/* ******** Anna ********* */

let mybutton = document.getElementById('scroll-btn')
window.onscroll = function (e) {
  scrollFunction(e)
}
function scrollFunction(e) {
  if (window.scrollY > 20) {
    mybutton.style.opacity = '1'
    mybutton.style.zIndex = '12'
  } else {
    mybutton.style.opacity = '0'
    mybutton.style.zIndex = '1'
  }
}

mybutton.addEventListener('click', e => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
})

/* ******** Katherine ********* */

if (document.getElementById('about') != null) {
  const interval = setInterval(() => {
    sliCount = sliCount + 1
    startSlider2()
  }, 2000)
  var sliCount = 0
  const sliderCont = document.querySelector('.about-slider')
  const slider = document.querySelector('#sli-img')
  startSlider2 = () => {
    if (sliCount <= 10) {
      const sliderWidth = slider.clientWidth
      sliderCont.scrollLeft += sliderWidth
    } else {
      const sliderWidth = slider.clientWidth
      sliderCont.scrollLeft -= sliderWidth * 10
      sliCount = 0
    }
  }
}
