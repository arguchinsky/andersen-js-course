import { createElement, createItemsCollection } from '../../utils';

export class ProductView {
  constructor(state = []) {
    this.products = document.getElementById('products');

    this.render(state);
  }

  render(state) {
    const productsListItems = createItemsCollection(state);
    const newProductsList = createElement(
      { className: 'products-list' },
      'ul',
      ...productsListItems
    );

    this.products.querySelector('.products-list').remove();
    this.products.append(newProductsList);
  }

  updateView(newState) {
    this.render(newState);
  }
}
