import { storage } from '../../utils';

export class ProductModel {
  constructor(state = []) {
    this.state = state;

    this.saveState();
  }

  addItem(item) {
    this.state.push(item);

    this.saveState();
    return [...this.state];
  }

  saveState() {
    storage.save('product-state', this.state);
  }
}
