const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const rootPath = "./assets/images/slideshow/";
let flechesGauche = document.querySelector(".arrow_left");
let flecheDroite = document.querySelector(".arrow_right");
let bannerImg = document.querySelector(".banner-img");
let index = 0;
let dots = document.querySelector(".dots");
let textBanner = document.querySelector("#banner p");
let nouvelElement = [];

bannerImg.src = rootPath + slides[0].image;
textBanner.innerHTML = slides[0].tagLine;

for (i = 0; i < slides.length; i++) {
  nouvelElement[i] = document.createElement("div");
  nouvelElement[i].classList.add("dot", "dots" + [i]);
  dots.appendChild(nouvelElement[i]);
  nouvelElement[0].classList.add("dot_selected");
}
const next = () => {
  if (index < slides.length - 1) {
    nouvelElement[index].classList.remove("dot_selected");
    index++;
    nouvelElement[index].classList.add("dot_selected");
  } else {
    nouvelElement[index].classList.remove("dot_selected");
    index = 0;
    nouvelElement[index].classList.add("dot_selected");
  }
  textBanner.innerHTML = slides[index].tagLine;
  bannerImg.src = rootPath + slides[index].image;
};

const previous = () => {
  if (index === 0) {
    nouvelElement[0].classList.remove("dot_selected");
    index = slides.length - 1;
    nouvelElement[index].classList.add("dot_selected");
  } else {
    nouvelElement[index].classList.remove("dot_selected");
    index--;
    nouvelElement[index].classList.add("dot_selected");
  }
  textBanner.innerHTML = slides[index].tagLine;
  bannerImg.src = rootPath + slides[index].image;
};

flechesGauche.addEventListener("click", previous);
flecheDroite.addEventListener("click", next);
