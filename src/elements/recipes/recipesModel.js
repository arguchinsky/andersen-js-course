import { initialRecipesState, storage } from '../../utils';

export class RecipesModel {
  constructor(state = initialRecipesState) {
    this.state = state;
  }

  addItem(recipe) {
    this.state.push(recipe);

    this.saveState();
    return this.state;
  }

  saveState() {
    storage('recipes-state', this.state);
  }
}
