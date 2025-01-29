// Fonction pour afficher la map et que ce soit saint-etienne d'afficher
var map = L.map('map').setView([45.439695, 4.3871779], 13);

var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);

L.marker([45.439695, 4.3871779]).addTo(map);

//----------------
// Fonction navbar
//----------------
// quans je scroll down, ma navbar va disparaitre, et quand je scroll up elle reaparait
// initialisation du scrolltop a 0 en dehors de la fonction
let scrollTop = 0;
navbar = document.querySelector(`header`);
// ajout du scroll sur la page
window.addEventListener(`scroll`, ()=>{
	// scrollDown est egale au nombre de pixel defilé verticalement
	let scrollDown = window.scrollY;
	// si scrollDown est superieur a scroll top, je deplace ma navbar en haut du nombre de pixel de sa taille
	if(scrollDown > scrollTop){
		navbar.style.top= `-9vh`;
	// sinon je la laisse dans sa position initiale
	}else{
		navbar.style.top=`0`;
	}
	// scrollTop doit etre egale a scrollDown pour qu'a chaque scroll up sur la page elle puisse réaparraitre et disparaitre
	scrollTop = scrollDown;
});

//-----------------------------
// Fonction pour le menu burger
//-----------------------------
let liens = document.querySelectorAll(`header nav a`);
let menu = document.querySelector(`.icon-burger`);
let header = document.querySelector(`header`);

menu.addEventListener(`click`, ()=>{
	header.classList.toggle(`active`);
});

liens.forEach(lien => {
	lien.addEventListener(`click`, ()=>{
		header.classList.remove(`active`);
	});
});