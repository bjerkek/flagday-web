let slideIndex = 0;
showImg(slideIndex);

function showImg(n) {
  const x = document.getElementsByClassName('mySlides');
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = 'none';  
  }
  x[n].style.display = 'block';

  const y = document.getElementsByClassName('mySlides-button');
  for (let j = 0; j < y.length; j++) {
    y[j].style.color = '#a3a3a7';
  }
  y[n].style.color = '#006666';
}
