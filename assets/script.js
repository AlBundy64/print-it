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
function slideNext(){
	console.log("clic à droite");
}

function slidePrev(){
	console.log("clic à gauche");
}