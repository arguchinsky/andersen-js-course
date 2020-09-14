import { initialGarbageState, createIngredient, storage } from '../../utils';

export class GarbageModel {
  constructor() {
    this.state = storage.load('garbage-state') ?? initialGarbageState;
    this.ingredientsList = this.state.map((ingredient) => ingredient.dataId);

    this.saveState();
  }

  addItems({ ingredients }) {
    ingredients
      .filter((ingredient) => !this.ingredientsList.includes(ingredient.toLowerCase()))
      .forEach((ingredient) => this.state.push(createIngredient(ingredient)));
    this.saveState();
    return [...this.state];
  }

  getItem(id) {
    return this.state.find((el) => el.dataId === id);
  }

  getState() {
    return [...this.state];
  }

  saveState() {
    storage.save('garbage-state', this.state);
  }
}
