
// Modulos
import Splide from '@splidejs/splide';
import * as showPromoModal from './promoModals.js';

// Mostrar la burga
document.querySelector('.header__burger__button').addEventListener('click', e => {
	document.querySelector('.header__burger__links').classList.toggle("active");
	e.target.classList.toggle("fa-bars");
	e.target.classList.toggle("fa-xmark");
});

// Carrusel
document.addEventListener('DOMContentLoaded', () => {
	new Splide( '.splide', {
		type: 'loop',
		autoplay: true,
	}).mount();
})

// Productos
// (parte mas explicada)
const modal = document.querySelector('.product-modal');
const modalBackground = document.querySelector('.bg');

// Funcion para cambiar el contenido del modal segun el producto
const productModal = (id) => {
	modal.children[1].textContent = `Producto ${id}`;
	modal.children[2].textContent = `Descripcion del producto ${id}`;
	modal.children[3].textContent = `${Math.round(Math.random() * 1500)}$`;

	modal.classList.toggle('active')
	modalBackground.classList.toggle('active')
}

// Cuando se toque el modal, que se quite
window.addEventListener('click', e => {
	if (e.target == modalBackground) {
		modal.classList.toggle('active');
		modalBackground.classList.toggle('active');
	}
})

const productsContainer = document.getElementById('productos');
const products = [];

// Bucle que recorre todos los productos cargados directamente del html
// Cuando se carguen de una base de datos, este bucle se combina con el mismo que carga los productos
// Notación asintótica: O(n)
for (let product of productsContainer.children) {
	product.addEventListener('click', () => {
		productModal(product.id)
	})
	products.push(product)
}