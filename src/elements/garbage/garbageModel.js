import { initialGarbageState, createIngredient, storage } from '../../utils';

function getIngredientsList(state) {
  return state.map((ingredient) => ingredient.dataId);
}
export class GarbageModel {
  constructor() {
    this.state = storage.load('garbage-state') ?? initialGarbageState;
    this.ingredientsList = getIngredientsList(this.state);
  }

  addItems({ ingredients }) {
    ingredients
      .filter((ingredient) => !this.ingredientsList.includes(ingredient.toLowerCase()))
      .forEach((ingredient) => {
        this.ingredientsList.push(ingredient);
        this.state.push(createIngredient(ingredient));
      });

    this.saveState();
    return [...this.state];
  }

  getItem(id) {
    return this.state.find((el) => el.dataId === id);
  }

  getState() {
    return [...this.state];
  }

  refreshState() {
    this.state = [...initialGarbageState];
    this.ingredientsList = getIngredientsList([...initialGarbageState]);
    this.saveState();

    return [...this.state];
  }

  saveState() {
    storage.save('garbage-state', this.state);
  }
}
