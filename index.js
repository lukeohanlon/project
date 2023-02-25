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