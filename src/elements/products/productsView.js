import { createList, createItemsCollection, getElementById, EventEmitter } from '../../utils';

export class ProductsView extends EventEmitter {
  constructor() {
    super();

    this.products = getElementById('products');
    this.refreshProductsButton = getElementById('refreshProductsButton');

    this.refreshProductsButton.addEventListener('click', this.handleRefreshProducts.bind(this));
  }

  render(state) {
    const productsListItems = createItemsCollection(state);
    const newProductsList = createList('products-list', ...productsListItems);

    this.products.querySelector('.products-list').remove();
    this.products.append(newProductsList);
  }

  handleRefreshProducts() {
    this.emit('refreshProducts');
  }
}
