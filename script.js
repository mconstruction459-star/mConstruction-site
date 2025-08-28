// Hero background slideshow
const hero = document.querySelector('.hero');
const images = ["images/bg1.png", "images/bg2.png", "images/bg3.png"];
let i = 0;

setInterval(() => {
  i = (i + 1) % images.length;
  hero.style.backgroundImage = `url(${images[i]})`;
}, 5000); // ndryshon çdo 5 sekonda
