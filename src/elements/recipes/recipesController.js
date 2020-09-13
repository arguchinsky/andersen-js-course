import { RecipesModel } from './recipesModel';
import { RecipesView } from './recipesView';

const view = new RecipesView();
const model = new RecipesModel();

export class RecipesController {
  constructor() {
    this.view = view;
    this.model = model;

    this.view.render(this.model.state);

    view.subscribe('addRecipe', this.addRecipe.bind(this));
    view.subscribe('showRecipe', this.getIngredients.bind(this));
    view.subscribe('dragRecipe', this.getRecipe.bind(this));
  }

  addRecipe(recipe) {
    this.view.render(this.model.addRecipe(recipe));
  }

  getRecipe({
    dataTransfer,
    target: {
      dataset: { id },
    },
  }) {
    this.view.dragRecipe(dataTransfer, this.model.getRecipe(id));
  }

  getIngredients({ dataset: { id } }) {
    this.view.showRecipe(this.model.getIngredients(id));
  }
}
