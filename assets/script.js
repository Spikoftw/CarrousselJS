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

for (i = 0; i < slides.length; i++) {
	let nouvelElement = document.createElement("div")
	nouvelElement.classList.add("dot")
	dots.appendChild(nouvelElement)
}

let dotselected = document.querySelector(".dot")

flechesGauche.addEventListener("click", () => {
	console.log("J'ai cliqué sur la fleche de gauche")
	if (index === 0) {
		index = slides.length - 1
	}
	else {
		index--
	}
	dotselected.classList.add("dot_selected")
	textBanner.innerHTML = slides[index].tagLine
	bannerImg.src = "./assets/images/slideshow/" + slides[index].image
})

flecheDroite.addEventListener("click", () => {
	console.log("J'ai cliqué sur la fleche de droite")
	if (index < slides.length - 1) {
		index++
	}
	else {
		index = 0
	}
	textBanner.innerHTML = slides[index].tagLine
	bannerImg.src = "./assets/images/slideshow/" + slides[index].image
})