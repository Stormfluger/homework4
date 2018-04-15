'use strict'

const buttons = document.querySelectorAll('.add'),
      totalItems = document.querySelector('#cart-count'),
      totalPrice = document.querySelector('#cart-total-price');
      let cartCount = 0;
      let cartTotalPrice = 0;

function addToCart(event) {
	totalItems.innerHTML = ++cartCount;
	cartTotalPrice += Number(this.dataset.price);
	totalPrice.innerHTML = getPriceFormatted(cartTotalPrice);
}

for (const button of buttons) {
  button.addEventListener('click', addToCart);
}