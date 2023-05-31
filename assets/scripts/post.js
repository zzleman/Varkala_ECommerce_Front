const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');

let cart = [];
let buttonsDOM = [];

class Products {
  async getProducts() {
    try {
      const response = await fetch('./assets/json/products.json');
      const data = await response.json();
      const products = data.items.map(item => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

class UI {
  displayProducts(products) {
    let result = '';
    products.forEach(product => {
      result += `
        <article class="product">
          <div class="img-container">
            <img src=${product.image} alt="" class="product-img">
            <button class="bag-btn" data-id=${product.id}>
              <i class="fas fa-shopping-cart"></i>
              add to cart
            </button>
          </div>
          <h3>${product.title}</h3>
          <h5>$${product.price}</h5>
        </article>
      `;
    });
    productsDOM.innerHTML = result;
  }

  getBagButtons() {
    const buttons = [...document.querySelectorAll('.bag-btn')];
    buttonsDOM = buttons;
    buttons.forEach(button => {
      const id = button.dataset.id;
      const inCart = cart.find(item => item.id === id);
      
      if (inCart) {
        button.innerText = 'In Cart';
        button.disabled = true;
      } else {
        button.addEventListener('click', event => {
          event.target.innerText = 'In Cart';
          event.target.disabled = true;
          const cartItem = { ...Storage.getProduct(id), amount: 1 };
          cart = [...cart, cartItem];
          Storage.saveCart(cart);
          this.setCartValues(cart);
          this.addCartItem(cartItem);
          this.showCart();
        });
        
      }
    });
  }

  setCartValues(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;
    cart.forEach(item => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    cartItems.innerText = itemsTotal;
  }

  addCartItem(item) {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <img src=${item.image} alt="">
      <div>
        <h4>${item.title}</h4>
        <h5>$${item.price}</h5>
        <span class="remove-item" data-id=${item.id}>X</span>
      </div>
      <div>
        <i class="fas fa-chevron-up" data-id=${item.id}></i>
        <p class="item-amount">${item.amount}</p>
        <i class="fas fa-chevron-down" data-id=${item.id}></i>
      </div>
    `;
    cartContent.appendChild(div);
  }

  showCart() {
    cartOverlay.classList.add('transparentBcg');
    cartDOM.classList.add('showCart');
  }
  
  hideCart() {
    cartOverlay.classList.remove('transparentBcg');
    cartDOM.classList.remove('showCart');
  }

  setupApp() {
    cart = Storage.getCart();
    this.setCartValues(cart);
    this.populateCart(cart);
    cartBtn.addEventListener('click', this.showCart);
    closeCartBtn.addEventListener('click', this.hideCart);
  }

  populateCart(cart) {
    cart.forEach(item => this.addCartItem(item));
  }

  cartLogic() {
    clearCartBtn.addEventListener('click', () => {
      this.clearCart();
    });

    cartContent.addEventListener('click', event => {
      if (event.target.classList.contains('remove-item')) {
        const removeItem = event.target;
        const id = removeItem.dataset.id;
        this.removeItem(id);
        cartContent.removeChild(removeItem.parentElement.parentElement);
      } else if (event.target.classList.contains('fa-chevron-up')) {
        const increaseAmount = event.target;
        const id = increaseAmount.dataset.id;
        const tempItem = cart.find(item => item.id === id);
        tempItem.amount++;
        Storage.saveCart(cart);
        this.setCartValues(cart);
        increaseAmount.nextElementSibling.innerText = tempItem.amount;
      } else if (event.target.classList.contains('fa-chevron-down')) {
        const decreaseAmount = event.target;
        const id = decreaseAmount.dataset.id;
        const tempItem = cart.find(item => item.id === id);
        tempItem.amount--;
        if (tempItem.amount > 0) {
          Storage.saveCart(cart);
          this.setCartValues(cart);
          decreaseAmount.previousElementSibling.innerText = tempItem.amount;
        } else {
          this.removeItem(id);
          cartContent.removeChild(decreaseAmount.parentElement.parentElement);
        }
      }
    });
  }

  clearCart() {
    const cartItems = cart.map(item => item.id);
    cartItems.forEach(id => this.removeItem(id));
    while (cartContent.children.length > 0) {
      cartContent.removeChild(cartContent.children[0]);
    }
    this.hideCart();
  }

  removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    this.setCartValues(cart);
    Storage.saveCart(cart);
    const button = this.getSingleButton(id);
    button.disabled = false;
    button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
  }

  getSingleButton(id) {
    return buttonsDOM.find(button => button.dataset.id === id);
  }
}

class Storage {
  static saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  static getProduct(id) {
    const products = JSON.parse(localStorage.getItem('products'));
    return products.find(product => product.id === id);
  }

  static saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  static getCart() {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const products = new Products();
  const ui = new UI();

  ui.setupApp();

  products
    .getProducts()
    .then(products => {
      ui.displayProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      ui.getBagButtons();
      ui.cartLogic();
    });
});


