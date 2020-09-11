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

  saveState() {
    storage.save('recipes-state', this.state);
  }
}
