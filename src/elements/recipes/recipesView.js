/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import {
  getElementById,
  createItemsCollection,
  createList,
  removeElement,
  createItem,
  createRecipe,
  EventEmitter,
} from '../../utils';

function isRecipe(object) {
  return object.dataset.type === 'recipe';
}

function getInputs(form) {
  return Array.from(form.children)
    .filter((input) => input.value)
    .map((input) => input.value);
}

function clearFormFields(form) {
  Array.from(form.children).forEach((input) => (input.value = ''));
}

export class RecipesView extends EventEmitter {
  constructor() {
    super();

    this.recipes = getElementById('recipes');
    this.addRecipeButton = getElementById('addRecipe');
    this.refreshRecipeButton = getElementById('refreshRecipesButton');
    this.recipesIngredients = getElementById('recipesIngredients');
    this.createRecipe = getElementById('createRecipe');

    this.recipes.addEventListener('dragstart', this.handleDragRecipe.bind(this));
    this.recipes.addEventListener('mouseover', this.handleHoverRecipe.bind(this));
    this.addRecipeButton.addEventListener('click', this.handleAddRecipe.bind(this));
    this.refreshRecipeButton.addEventListener('click', this.handleRefreshRecipes.bind(this));
  }

  render(state) {
    const recipesList = createList('recipes-list', ...createItemsCollection(state));

    removeElement(this.recipes, '.recipes-list');

    this.recipes.prepend(recipesList);
  }

  showRecipe(ingredients) {
    const ingredientsList = createList(
      'ingredients-list',
      ...ingredients.map((item) =>
        createItem({ className: 'recipes-ingredients-item', title: item })
      )
    );

    removeElement(this.recipesIngredients, '.ingredients-list');

    this.recipesIngredients.append(ingredientsList);

    this.createRecipe.classList.add('hide');
    this.recipesIngredients.classList.remove('hide');
  }

  hideRecipe() {
    this.recipesIngredients.classList.add('hide');
    this.createRecipe.classList.remove('hide');
  }

  // eslint-disable-next-line class-methods-use-this
  dragRecipe(dataTransfer, item) {
    const recipe = { ...item, draggable: false };
    dataTransfer.setData('recipe', JSON.stringify(recipe));
  }

  handleHoverRecipe({ target }) {
    if (isRecipe(target)) {
      this.emit('showRecipe', target);
    } else {
      this.hideRecipe();
    }
  }

  handleAddRecipe() {
    const data = getInputs(this.createRecipe);
    if (data[0]) {
      const name = data.shift();
      if (data.length) {
        const recipe = createRecipe(name, data);

        this.emit('addRecipe', recipe);

        clearFormFields(this.createRecipe);
      } else {
        alert('You should fill in one or more ingredient fields!');
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('You should fill in the Title field!');
    }
  }

  handleDragRecipe(event) {
    this.emit('dragRecipe', event);
  }

  handleRefreshRecipes() {
    this.emit('refreshRecipes');
  }
}
