const autoPlay = document.querySelector("#auto");
const inputValue = document.querySelector("input");
const confirmButton = document.querySelector("#confirmButton");
var intervalValue;
var setInputValue;
confirmButton.addEventListener("click", function(){
  setInputValue = inputValue.value;
})
    
const stopAutoPlay = document.querySelector("#stop");
const nextButton = document.querySelector("#Next");
nextButton.addEventListener("click", function(){
  nextSlide()
})
const previousButton = document.querySelector("#Pr");
previousButton.addEventListener("click", function(){
  previousSlide()
})
var slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
  var slides = document.getElementsByClassName("slide");
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function previousSlide() {
  slideIndex--;
  showSlide(slideIndex);
}
autoPlay.addEventListener("click", function(){
  intervalValue = setInterval(function() {
    nextSlide();
  }, setInputValue);
})
stopAutoPlay.addEventListener("click", function(){
  clearInterval(intervalValue);
})

  
