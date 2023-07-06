const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let flechesGauche = document.querySelector(".arrow_left")
let flecheDroite = document.querySelector(".arrow_right")
let bannerImg = document.querySelector(".banner-img")
let index = 0
let dots = document.querySelector(".dots")
let textBanner = document.querySelector("#banner p")

bannerImg.src = "./assets/images/slideshow/" + slides[0].image

let nouvelElement = []

for (i = 0; i < slides.length; i++) {
	nouvelElement[i] = document.createElement("div")
	nouvelElement[i].classList.add("dot", "dots"+[i])
	dots.appendChild(nouvelElement[i])
	nouvelElement[0].classList.add("dot_selected")
}

let dotselected = document.querySelector(".dot")

flechesGauche.addEventListener("click", () => {
	if (index === 0) {
		index = slides.length - 1
		nouvelElement[index].classList.add("dot_selected")
		nouvelElement[0].classList.remove("dot_selected")
	}
	else {
		index--
		nouvelElement[index].classList.add("dot_selected")
		nouvelElement[index + 1].classList.remove("dot_selected")
	}
	textBanner.innerHTML = slides[index].tagLine
	bannerImg.src = "./assets/images/slideshow/" + slides[index].image
})

flecheDroite.addEventListener("click", () => {
	if (index < slides.length - 1) {
		nouvelElement[index].classList.remove("dot_selected")
		index++
		nouvelElement[index].classList.add("dot_selected")
	}
	else {
		nouvelElement[index].classList.remove("dot_selected")
		index = 0
		nouvelElement[index].classList.add("dot_selected")
	}
	textBanner.innerHTML = slides[index].tagLine
	bannerImg.src = "./assets/images/slideshow/" + slides[index].image
})