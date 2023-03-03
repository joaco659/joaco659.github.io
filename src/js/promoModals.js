
module.exports = (url) => {
	const promotionsBtn = document.querySelector('.promotions-btn');
	const promotionsModal = document.querySelector('.promotions');
	const promotionLink = promotionsModal.children[1];

	promotionsBtn.classList.toggle('shown');
	promotionsBtn.onclick = () => {
		promotionsBtn.classList.toggle('shown');
		promotionLink.attributes[0].nodeValue = url;
		promotionsModal.classList.toggle('active');
	}

	promotionsModal.children[0].onclick = () => {
		promotionsBtn.classList.toggle('shown');
		promotionsModal.classList.toggle('active');
	}
};

