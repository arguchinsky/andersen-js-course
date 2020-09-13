import { TableModel } from './tableModel';
import { TableView } from './tabelView';

const model = new TableModel();
const view = new TableView();

export class TableController {
  constructor() {
    this.view = view;
    this.model = model;

    this.view.render(this.model.state);
    view.subscribe('droppedItem', this.addDroppedItem.bind(this));
    view.subscribe('craft', this.craft.bind(this));
  }

  addDroppedItem(item) {
    switch (item.dataType) {
      case 'recipe': {
        this.view.render(this.model.addRecipe(item));
        break;
      }
      case 'ingredient': {
        this.view.render(this.model.addIngredient(item));
        break;
      }
      default:
        break;
    }
  }

  craft() {
    let product = null;
    const recipeIngredients = [...this.model.getRecipe().ingredients].sort().join('');
    const tableIngredients = [...this.model.getIngredients()]
      .filter((ingredient) => ingredient.dataId !== 'empty')
      .map((ingredient) => ingredient.dataId)
      .sort()
      .join('');

    if (recipeIngredients === tableIngredients) {
      product = { ...this.model.getRecipe() };
    }

    this.view.render({ ...this.model.dropState() });

    return product;
  }
}
