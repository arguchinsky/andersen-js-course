/* eslint-disable class-methods-use-this */
import {
  getElementById,
  createItem,
  createList,
  createItemsCollection,
  removeElement,
  EventEmitter,
} from '../../utils';

export class TableView extends EventEmitter {
  constructor() {
    super();

    this.table = getElementById('table');
    this.craftButton = getElementById('craftButton');

    this.table.addEventListener('dragover', this.handleDragOver.bind(this));
    this.table.addEventListener('drop', this.handleDrop.bind(this));
    this.craftButton.addEventListener('click', this.handleCraftButton.bind(this));
  }

  // addRecipe(recipe) {
  //   const newRecipe = createItem(recipe);

  //   newRecipe.classList.add('recipe');

  //   removeElement(this.table, '.recipe');
  //   this.table.prepend(newRecipe);
  // }

  // addIngredient(ingredient) {
  //   const newIngredient = createItem(ingredient);
  //   const ingredients = createItemsCollection(this.state.ingredients);

  //   ingredients.pop();
  //   ingredients.unshift(newIngredient);

  //   const ingredientsList = createList('table-ingredients', ...createItemsCollection(ingredients));

  //   removeElement(this.table, '.table-ingredients');
  //   this.craftButton.before(ingredientsList);
  // }

  render({ recipe, ingredients }) {
    const tableRecipe = createItem(recipe);
    const ingredientsList = createList('table-ingredients', ...createItemsCollection(ingredients));

    tableRecipe.classList.add('recipe');

    removeElement(this.table, '.recipe');
    removeElement(this.table, '.table-ingredients');

    this.table.prepend(ingredientsList);
    this.table.prepend(tableRecipe);
  }

  handleDragOver(event) {
    event.preventDefault();
  }

  handleDrop({
    dataTransfer,
    target: {
      dataset: { type },
    },
  }) {
    switch (type) {
      case 'recipe': {
        const recipe = JSON.parse(dataTransfer.getData('recipe'));
        this.emit('droppedItem', recipe);
        break;
      }
      case 'ingredient': {
        const ingredient = JSON.parse(dataTransfer.getData('ingredient'));
        this.emit('droppedItem', ingredient);
        break;
      }
      default:
        break;
    }
  }

  handleCraftButton() {
    this.emit('craft');
  }
}
