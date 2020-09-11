import {
  getElementById,
  createItemsCollection,
  createList,
  removeElement,
  initialRecipesState,
  createItem,
} from '../../utils';

function isRecipe(object) {
  return object.dataset.type === 'recipe';
}

function getIngredients({ dataset: { id } }, state) {
  return state.find((el) => el.dataId === id).ingredients;
}

export class RecipesView {
  constructor(state) {
    this.state = state ?? initialRecipesState;

    this.recipes = getElementById('recipes');
    this.addRecipe = getElementById('addRecipe');
    this.recipesIngredients = getElementById('recipesIngredients');
    this.createRecipe = getElementById('createRecipe');

    this.render(this.state);
    this.recipes.addEventListener('mouseover', this.onHoverRecipe.bind(this));
  }

  render(state) {
    const recipesList = createList('recipes-list', ...createItemsCollection(state));

    removeElement(this.recipes, '.recipes-list');

    this.recipes.prepend(recipesList);
  }

  showRecipe(target) {
    const ingredients = getIngredients(target, this.state).map((item) =>
      createItem({ className: 'recipes-ingredients-item', title: item })
    );

    const ingredientsList = createList('ingredients-list', ...ingredients);

    removeElement(this.recipesIngredients, '.ingredients-list');

    this.recipesIngredients.append(ingredientsList);

    this.createRecipe.classList.add('hide');
    this.recipesIngredients.classList.remove('hide');
  }

  hideRecipe() {
    this.recipesIngredients.classList.add('hide');
    this.createRecipe.classList.remove('hide');
  }

  onHoverRecipe({ target }) {
    if (isRecipe(target)) {
      this.showRecipe(target);
    } else {
      this.hideRecipe();
    }
  }
}
