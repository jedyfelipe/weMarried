// Efeito scroll //

var menuItems = document.querySelectorAll ('.links a');

menuItems.forEach(item =>{
	item.addEventListener ('click', scrollToIdOnClick);
})

function scrollToIdOnClick (event) {
	var elemente = event.target;
	
}