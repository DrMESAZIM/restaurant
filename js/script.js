
let menu =document.querySelector('#menu-bar');
let navbar= document.querySelector('.navbar');

menu.onclick=() =>{

	menu =classList.toggle('fas fa-times-circle-o');
	navbar=classList.toggle('active');

}

window.onscroll=() =>{

	menu =classList.remove('fas fa-times-circle-o');
	navbar=classList.remove('active');

}
