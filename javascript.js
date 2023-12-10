let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// const rain = true

// function theme(rain){
//     if (rain = true){
//       document.getElementById('theme').innerHTML.style.backgroundColor = "red"
    
// }
//  else{
//   x.style.backgroundColor = "red"
//  }
// }

// theme(rain)

const rain = false;

function changeBackgroundColor(rain) {
  var themeDiv = document.getElementById('theme');

  if (rain) {
    // Set background color to gray if rain is true
    themeDiv.style.backgroundColor = 'gray';
  } else {
    // Set the original background color (hsl(241, 87%, 63%)) if rain is false
    themeDiv.style.backgroundColor = 'hsl(241, 87%, 63%)';
  }
}

// Example usage
// Set rain to true or false based on your logic
changeBackgroundColor(rain);
