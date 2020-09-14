import { createProduct, storage } from '../../utils';

export class ProductsModel {
  constructor() {
    this.state = storage.load('product-state') ?? [];
  }

  addProduct(item) {
    this.state.push(createProduct(item));

    this.saveState();
    return [...this.state];
  }

  getState() {
    return [...this.state];
  }

  saveState() {
    storage.save('product-state', this.state);
  }
}
