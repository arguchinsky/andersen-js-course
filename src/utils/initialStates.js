export const initialGarbageState = [
  {
    title: 'Rock',
    dataId: 'rock',
    className: 'garbage-item',
    dataType: 'ingredient',
    draggable: true,
  },
  {
    title: 'Wood',
    dataId: 'wood',
    className: 'garbage-item',
    dataType: 'ingredient',
    draggable: true,
  },
  {
    title: 'Paper',
    dataId: 'paper',
    className: 'garbage-item',
    dataType: 'ingredient',
    draggable: true,
  },
  {
    title: 'Stick',
    dataId: 'stick',
    className: 'garbage-item',
    dataType: 'ingredient',
    draggable: true,
  },
  {
    title: 'Rope',
    dataId: 'rope',
    className: 'garbage-item',
    dataType: 'ingredient',
    draggable: true,
  },
  {
    title: 'Steel',
    dataId: 'steel',
    className: 'garbage-item',
    dataType: 'ingredient',
    draggable: true,
  },
  {
    title: 'Lighter',
    dataId: 'lighter',
    className: 'garbage-item',
    dataType: 'ingredient',
    draggable: true,
  },
  {
    title: 'Glass',
    dataId: 'glass',
    className: 'garbage-item',
    dataType: 'ingredient',
    draggable: true,
  },
];

export const initialTableState = {
  recipe: {
    title: 'Recipe',
    dataId: 'recipe',
    className: 'table-item',
    dataType: 'recipe',
    draggable: false,
    ingredients: [],
  },
  ingredients: [
    {
      title: 'Empty',
      dataId: 'empty',
      className: 'table-item',
      dataType: 'ingredient',
      draggable: false,
      ingredients: [],
    },
    {
      title: 'Empty',
      dataId: 'empty',
      className: 'table-item',
      dataType: 'ingredient',
      draggable: false,
      ingredients: [],
    },
    {
      title: 'Empty',
      dataId: 'empty',
      className: 'table-item',
      dataType: 'ingredient',
      draggable: false,
      ingredients: [],
    },
    {
      title: 'Empty',
      dataId: 'empty',
      className: 'table-item',
      dataType: 'ingredient',
      draggable: false,
      ingredients: [],
    },
    {
      title: 'Empty',
      dataId: 'empty',
      className: 'table-item',
      dataType: 'ingredient',
      draggable: false,
      ingredients: [],
    },
    {
      title: 'Empty',
      dataId: 'empty',
      className: 'table-item',
      dataType: 'ingredient',
      draggable: false,
      ingredients: [],
    },
  ],
};

export const initialRecipesState = [
  {
    title: 'Fire',
    dataId: 'fire',
    className: 'recipes-item',
    dataType: 'recipe',
    draggable: true,
    ingredients: ['wood', 'paper', 'lighter'],
  },
  {
    title: 'Hammer',
    dataId: 'hammer',
    className: 'recipes-item',
    dataType: 'recipe',
    draggable: true,
    ingredients: ['rock', 'rope', 'stick'],
  },
  {
    title: 'Knife',
    dataId: 'knife',
    className: 'recipes-item',
    dataType: 'recipe',
    draggable: true,
    ingredients: ['steel', 'rope', 'stick'],
  },
  {
    title: 'Knife',
    dataId: 'knife',
    className: 'recipes-item',
    dataType: 'recipe',
    draggable: true,
    ingredients: ['steel', 'rope', 'stick'],
  },
  {
    title: 'Box',
    dataId: 'box',
    className: 'recipes-item',
    dataType: 'recipe',
    draggable: true,
    ingredients: ['wood', 'rope'],
  },
];
