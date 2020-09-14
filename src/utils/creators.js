export function createItem(
  { title = 'Empty', dataId = 'empty', className, dataType = 'empty', draggable = false },
  tag = 'li'
) {
  const element = document.createElement(tag);

  element.className = className;
  element.setAttribute('data-id', dataId);
  element.setAttribute('data-type', dataType);
  element.setAttribute('draggable', draggable);
  element.textContent = title;

  return element;
}

export function createList(className, ...children) {
  const element = document.createElement('ul');

  element.className = className;
  element.append(...children);

  return element;
}

export function createItemsCollection(objects) {
  return objects.map((el) => createItem(el));
}

export function createIngredient(title) {
  return {
    title: title.slice(0, 1).toUpperCase() + title.slice(1),
    dataId: title.toLowerCase(),
    className: 'garbage-item',
    dataType: 'ingredient',
    draggable: true,
  };
}

export function createRecipe(title = 'Empty', ingredients) {
  return {
    title,
    dataId: title.toLowerCase(),
    className: 'recipes-item',
    dataType: 'recipe',
    draggable: true,
    ingredients: ingredients.map((item) => item.toLowerCase()),
  };
}

export function createProduct(title) {
  return {
    ...title,
    className: 'products-item',
    dataType: 'product',
    draggable: true,
  };
}
