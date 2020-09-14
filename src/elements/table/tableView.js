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
    this.refreshButton = getElementById('refreshTableButton');

    this.table.addEventListener('dragover', this.handleDragOver.bind(this));
    this.table.addEventListener('drop', this.handleDrop.bind(this));
    this.craftButton.addEventListener('click', this.handleCraftButton.bind(this));
    this.refreshButton.addEventListener('click', this.handleRefreshTable.bind(this));
  }

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

  handleRefreshTable() {
    this.emit('refreshTable');
  }
}
