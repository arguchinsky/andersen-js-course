export class RecipesController {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    view.subscribe('addRecipe', this.addRecipe.bind(this));
  }

  addRecipe(recipe) {
    this.view.render(this.model.addRecipe(recipe));
  }
}
