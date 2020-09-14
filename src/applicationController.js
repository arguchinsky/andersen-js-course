import { ProductsModel } from './elements/products/productsModel';
import { ProductsView } from './elements/products/productsView';
import { TableModel } from './elements/table/tableModel';
import { TableView } from './elements/table/tableView';
import { RecipesModel } from './elements/recipes/recipesModel';
import { RecipesView } from './elements/recipes/recipesView';
import { GarbageModel } from './elements/garbage/garbageModel';
import { GarbageView } from './elements/garbage/garbageView';

const productModel = new ProductsModel();
const productView = new ProductsView();
const tableModel = new TableModel();
const tableView = new TableView();
const recipeModel = new RecipesModel();
const recipeView = new RecipesView();
const garbageModel = new GarbageModel();
const garbageView = new GarbageView();

export class ApplicationController {
  constructor() {
    this.productModel = productModel;
    this.productView = productView;
    this.tableModel = tableModel;
    this.tableView = tableView;
    this.recipeModel = recipeModel;
    this.recipeView = recipeView;
    this.garbageModel = garbageModel;
    this.garbageView = garbageView;

    this.productView.render(this.productModel.getState());
    this.tableView.render(this.tableModel.getState());
    this.recipeView.render(this.recipeModel.getState());
    this.garbageView.render(this.garbageModel.getState());

    garbageView.subscribe('garbageDrag', this.getGarbageItem.bind(this));

    recipeView.subscribe('addRecipe', this.addRecipe.bind(this));
    recipeView.subscribe('showRecipe', this.getRecipeIngredients.bind(this));
    recipeView.subscribe('dragRecipe', this.getRecipe.bind(this));

    tableView.subscribe('droppedItem', this.addDroppedItem.bind(this));
    tableView.subscribe('craft', this.craft.bind(this));
  }

  getGarbageItem({
    dataTransfer,
    target: {
      dataset: { id },
    },
  }) {
    this.garbageView.dragItem(dataTransfer, this.garbageModel.getItem(id));
  }

  addRecipe(recipe) {
    this.recipeView.render(this.recipeModel.addRecipe(recipe));
    this.garbageView.render(this.garbageModel.addItems(recipe));
  }

  getRecipe({
    dataTransfer,
    target: {
      dataset: { id },
    },
  }) {
    this.recipeView.dragRecipe(dataTransfer, this.recipeModel.getRecipe(id));
  }

  getRecipeIngredients({ dataset: { id } }) {
    this.recipeView.showRecipe(this.recipeModel.getIngredients(id));
  }

  addDroppedItem(item) {
    switch (item.dataType) {
      case 'recipe': {
        this.tableView.render(this.tableModel.addRecipe(item));
        break;
      }
      case 'ingredient': {
        this.tableView.render(this.tableModel.addIngredient(item));
        break;
      }
      default:
        break;
    }
  }

  craft() {
    if (this.tableModel.getRecipe().dataId === 'empty') {
      alert('You should drop a recipe on the table!');
    } else {
      const recipeIngredients = [...this.tableModel.getRecipe().ingredients].sort().join('');
      const tableIngredients = [...this.tableModel.getIngredients()]
        .filter((ingredient) => ingredient.dataId !== 'empty')
        .map((ingredient) => ingredient.dataId)
        .sort()
        .join('');

      if (!tableIngredients.length) {
        alert('You should drop ingredients on the table!');
      } else if (recipeIngredients !== tableIngredients) {
        alert("Ingredients don't much with recipe!'\nPlease check the recipe and try again!");
        this.tableView.render({ ...this.tableModel.dropIngredients() });
      } else {
        this.productView.render(this.productModel.addProduct({ ...this.tableModel.getRecipe() }));
        this.tableView.render({ ...this.tableModel.dropState() });
      }
    }
  }
}
