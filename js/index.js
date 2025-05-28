// MOSTRAR RESUMEN DE CARRITO DE COMPRA

const btnCart = document.querySelector('.cart');
const containerCartProducts = document.querySelector('.cart-products-container');
const cartCountProducts = document.querySelector('.cart-count');

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
    cartCountProducts.classList.toggle('hidden-count');
});


// SELECCIONAR LA IMAGEN DE CADA ZAPATILLA

const smallImages = document.querySelectorAll('.product-img-column .product-img');

const mainImage = document.querySelector('.img-cover');

smallImages.forEach((image) => {
    image.addEventListener('click', () => {
        const newSrc = image.getAttribute('src');

        mainImage.setAttribute('src', newSrc);
    });
});