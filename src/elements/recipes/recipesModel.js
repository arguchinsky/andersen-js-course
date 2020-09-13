import { initialRecipesState, storage } from '../../utils';

export class RecipesModel {
  constructor() {
    this.state = storage.load('recipes-state') ?? initialRecipesState;
  }

  addRecipe(recipe) {
    this.state.push(recipe);

    this.saveState();
    return [...this.state];
  }

  getIngredients(id) {
    return [...this.state.find((el) => el.dataId === id).ingredients];
  }

  getRecipe(id) {
    return { ...this.state.find((el) => el.dataId === id) };
  }

  saveState() {
    storage.save('recipes-state', this.state);
  }
}
