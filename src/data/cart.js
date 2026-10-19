export const getCart = () => {
  const cart = localStorage.getItem('gamebites_cart');
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart) => {
  localStorage.setItem('gamebites_cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('cartUpdated'));
};

export const addToCart = (productId, quantity = 1) => {
  const cart = getCart();
  const existingIndex = cart.findIndex((item) => item.id === Number(productId));

  if (existingIndex > -1) {
    cart[existingIndex].quantity += Number(quantity);
  } else {
    cart.push({ id: Number(productId), quantity: Number(quantity) });
  }

  saveCart(cart);
};