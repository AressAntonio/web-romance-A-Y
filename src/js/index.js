
///funcion para que l btnNO se mueva
function mover(elm) {
	elm.style.position='absolute';
	elm.style.top=Math.random()*(window.innerHeight - elm.offsetHeight) + 'px';
	elm.style.left=Math.random()*(window.innerWidth - elm.offsetWidth) + 'px';

};

//variables con ID de objetos en index.html
let btnSI = document.getElementById("btn-si");
let btnNO = document.getElementById("btn-no");
let divTitulo=document.getElementsByClassName('titulo')[0];


//funcion para agregar movimiento a btnNO
btnNO.addEventListener('mouseenter', function(e){
	mover(e.target);
});

//funcion para agregar funcionalidad a btnSI
btnSI.addEventListener('click', function(elm){
	alert('Eres muy especial para mi, TE AMO. <3 '); 
});
