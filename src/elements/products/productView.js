import { createList, createItemsCollection, getElementById } from '../../utils';

export class ProductView {
  constructor(state = []) {
    this.products = getElementById('products');

    this.render(state);
  }

  render(state) {
    const productsListItems = createItemsCollection(state);
    const newProductsList = createList('products-list', ...productsListItems);

    this.products.querySelector('.products-list').remove();
    this.products.append(newProductsList);
  }

  updateView(newState) {
    this.render(newState);
  }
}
