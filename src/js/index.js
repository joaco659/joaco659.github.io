


const getProductsBtn = document.getElementById('get-products')
const productsContainer = document.querySelector('.products-container')

getProductsBtn.addEventListener('click', async () => {
	const products = new Map([])
	try {
		const axiosProducts = await axios.get('../src/js/util/products.json')
		console.log(axiosProducts)
		Object.entries(axiosProducts.data.productos).map(([name, value]) => {
			products.set(name, [value.precio, value.stock])
		})
		console.log(products)

		for (let [name, value] of products.entries()) {
			console.log(`${name} - ${value[1]} - ${value[0]}`)
			let PRODUCT_HTML = `
				<div class="product">
					<h2 class="product__name">${name}</h2>
					<h3 class="product__price">${value[0]}</h3>
					<b class="product__stock product__stock--${value[1]}">${value[1]}</b>
				</div>
			`
			productsContainer.innerHTML += PRODUCT_HTML
		}
	}
	catch (error) {
		console.error(error)
	}
})
