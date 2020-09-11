import {
  getElementById,
  createItem,
  createList,
  createItemsCollection,
  removeElement,
  initialTableState,
} from '../../utils';

export class TableView {
  constructor() {
    this.state = initialTableState;

    this.table = getElementById('table');
    this.craftButton = getElementById('craftButton');

    this.render(this.state);
  }

  addRecipe(recipe) {
    const newRecipe = createItem(recipe).classList.add('recipe');

    removeElement(this.table, '.recipe');
    this.table.prepend(newRecipe);
  }

  addIngredient(ingredient) {
    const newIngredient = createItem(ingredient);
    const ingredients = createItemsCollection(this.state.ingredients);

    ingredients.pop();
    ingredients.unshift(newIngredient);

    const ingredientsList = createList('table-ingredients', ...ingredients);

    removeElement(this.table, '.table-ingredients');
    this.craftButton.before(ingredientsList);
  }

  render({ recipe, ingredients }) {
    const tableRecipe = createItem(recipe);
    const ingredientsList = createList('table-ingredients', ...ingredients);

    removeElement(this.table, '.recipe');
    removeElement(this.table, '.table-ingredients');

    this.table.prepend(ingredientsList);
    this.table.prepend(tableRecipe);
  }
}
