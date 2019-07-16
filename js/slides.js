var slideIndex = 0;
showImg(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

// function showDivs(n) {
//   console.log(n)
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }

function showImg(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[n].style.display = "block";

  var j;
  var y = document.getElementsByClassName("mySlides-button");
  for (j = 0; j < y.length; j++) {
    y[j].style.color = "#a3a3a7";
  }
  y[n].style.color = "#006666";
}