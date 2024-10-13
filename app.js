import Router from './services/Router.js';
import proxyStore from './services/Store.js';
import { loadData } from './services/Menu.js';

// Link my Web Components
import { MenuPage } from './components/MenuPage.js';
import { OrderPage } from './components/OrderPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import ProductItem from './components/ProductItem.js';
import CartItem from './components/CartItem.js';

window.app = {};
app.store = proxyStore;
app.router = Router;

// It's better to wait for the event for manipulation
window.addEventListener('DOMContentLoaded', () => {
  loadData();
  app.router.init();
});

window.addEventListener('appcartchange', (event) => {
  const badge = document.getElementById('badge');
  const qty = app.store.cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  badge.textContent = qty;
  badge.hidden = qty === 0;
});

// const $ = () => document.querySelector(this, arguments);
// const $$ = () => document.querySelectorAll(this, arguments);
// const _ = {
//   domready: (event) => {},
// };

// HTMLElement.prototype.on = (a, b, c) =>
//   this.addEventListener(a, b, c);
// HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
// HTMLElement.prototype.$ = (s) => this.quetySelector(s);
// HTMLElement.prototype.$$ = (s) => this.quetySelectorAll(s);
