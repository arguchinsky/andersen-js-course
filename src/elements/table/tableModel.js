import { initialTableState } from '../../utils';

export class TableModel {
  constructor() {
    this.state = { ...initialTableState };
  }

  addRecipe(recipe) {
    this.state.recipe = { ...recipe };

    return { ...this.state };
  }

  addIngredient(ingredient) {
    const ingredients = [...this.state.ingredients];
    ingredients.pop();
    ingredients.unshift(ingredient);

    this.state.ingredients = [...ingredients];

    return { ...this.state };
  }

  getRecipe() {
    return { ...this.state.recipe };
  }

  getIngredients() {
    return [...this.state.ingredients];
  }

  dropState() {
    this.state = { ...initialTableState };

    return { ...this.state };
  }
}
