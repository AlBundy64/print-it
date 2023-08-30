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

// On récupère les deux flèches
let next = document.querySelector(".arrow_right");
let prev = document.querySelector(".arrow_left");

// On met en place les écouteurs d'évènements sur les flèches
next.addEventListener("click", slideNext);
prev.addEventListener("click", slidePrev);

// Fonctions
let numero = 0;
function slideNext(){
	console.log("clic à droite");
	numero = numero + 1;
	if (numero < 0)
		numero = slides.length - 1;
	if (numero > slides.length - 1)
		numero = 0;
	document.getElementById("slide").src = "./assets/images/slideshow/" + slides[numero]["image"];
	document.getElementById("slider_text").innerHTML = slides[numero]["tagLine"];
	allDots[numero].classList.add("dot_selected");
	if (numero < slides.length && numero > 0)
		allDots[numero-1].classList.remove("dot_selected")
	else
		allDots[slides.length - 1].classList.remove("dot_selected");
}

function slidePrev(){
	console.log("clic à gauche");
	numero = numero - 1;
	if (numero < 0)
		numero = slides.length - 1;
	if (numero > slides.length - 1)
		numero = 0;
	document.getElementById("slide").src = "./assets/images/slideshow/" + slides[numero]["image"];
	document.getElementById("slider_text").innerHTML = slides[numero]["tagLine"];
	allDots[numero].classList.add("dot_selected");
	if (numero < slides.length - 1)
		allDots[numero+1].classList.remove("dot_selected");
	if (numero == slides.length - 1)
		allDots[0].classList.remove("dot_selected");	
}


// On récupère le nombre de slides pour créer les bullet points
for (let i = 0; i < slides.length; i++) {
	const nbBulletPoint = document.createElement("div");
	nbBulletPoint.classList.add("dot");
	document.querySelector(".dots").appendChild(nbBulletPoint);
}

const allDots = document.querySelectorAll(".dot");
    allDots[numero].classList.add("dot_selected");



