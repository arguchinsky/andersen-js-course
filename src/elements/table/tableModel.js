import { initialTableState } from '../../utils';

export class TableModel {
  constructor() {
    this.state = initialTableState;
  }

  addRecipe(recipe) {
    this.state.recipe = { ...recipe };

    return this.state;
  }

  addIngredient(ingredient) {
    this.state.ingredient.pop();
    this.state.ingredient.unshift(ingredient);

    return this.state;
  }

  dropState() {
    this.state = initialTableState;

    return this.state;
  }
}
